import React, { useRef, useEffect, useState, useCallback } from "react";
import PriorDamage from "../images/default.png";
import Truck from "../images/truck.png";
import Suv from "../images/suv.png";
import Compact from "../images/compact.png";
import { useTranslation } from "react-i18next";

export default function VehicleCanvas() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const coord = useRef({ x: 0, y: 0 });
  const paint = useRef(false);
  const historyRef = useRef([]); // Store canvas history
  const [isUndoAvailable, setIsUndoAvailable] = useState(false); // State to enable/disable Undo button
  const [image, setImg] = useState(PriorDamage);

  const { t } = useTranslation();
  const heading = t("headings", { returnObjects: true });
  const misc = t("misc", { returnObjects: true });
  const images = t("images", { returnObjects: true });

  const drawImage = useCallback(() => {
    const img = new Image();
    const ctx = ctxRef.current;
    img.src = image;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
      saveHistory(); // Save initial image to history
    };
  }, [image]);

  const saveHistory = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      historyRef.current.push(canvas.toDataURL()); // Save canvas state as an image
      setIsUndoAvailable(historyRef.current.length > 1); // Enable undo if history is present
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    // Resize canvas here
    const resize = () => {
      if (window.innerWidth > 1024) {
        ctx.canvas.width = 460;
        ctx.canvas.height = 270;
      } else {
        ctx.canvas.width = 350;
        ctx.canvas.height = 250;
      }
      drawImage();
    };

    const getPosition = (event) => {
      const canvasBounds = canvas.getBoundingClientRect();
      const clientX = event.clientX || event.touches[0].clientX;
      const clientY = event.clientY || event.touches[0].clientY;
      coord.current.x = clientX - canvasBounds.left;
      coord.current.y = clientY - canvasBounds.top;
    };

    const startPainting = (event) => {
      paint.current = true;
      getPosition(event);
    };

    const stopPainting = () => {
      if (paint.current) {
        saveHistory(); // Save the canvas state after drawing
      }
      paint.current = false;
    };

    const sketch = (event) => {
      if (!paint.current) return;

      const ctx = ctxRef.current;
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.strokeStyle = "red";

      ctx.moveTo(coord.current.x, coord.current.y);
      getPosition(event);
      ctx.lineTo(coord.current.x, coord.current.y);
      ctx.stroke();
    };

    resize(); // Resize on load

    // window.addEventListener("resize", resize);

    // Mouse Events
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mousemove", sketch);

    // Touch Events for mobile
    canvas.addEventListener("touchstart", startPainting);
    canvas.addEventListener("touchend", stopPainting);
    canvas.addEventListener("touchmove", sketch);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousedown", startPainting);
      canvas.removeEventListener("mouseup", stopPainting);
      canvas.removeEventListener("mousemove", sketch);
      canvas.removeEventListener("touchstart", startPainting);
      canvas.removeEventListener("touchend", stopPainting);
      canvas.removeEventListener("touchmove", sketch);
    };
  }, [drawImage]);

  const clearCanvas = () => {
    const ctx = ctxRef.current;
    if (ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      drawImage();
    }
    setIsUndoAvailable(false);
    historyRef.current = [];
  };

  const undoLast = () => {
    if (historyRef.current.length > 1) {
      historyRef.current.pop(); // Remove the latest snapshot
      const lastImage = historyRef.current[historyRef.current.length - 1];
      const img = new Image();
      const ctx = ctxRef.current;
      img.src = lastImage;
      img.onload = () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
        setIsUndoAvailable(historyRef.current.length > 1); // Disable undo if no more history
      };
    }
  };

  return (
    <div className="lg:w-[50%] mx-auto border">
      <h2 className="bg-black text-white w-full flex justify-center">
        {heading[3]}
      </h2>
      <canvas
        ref={canvasRef}
        id="canvas"
        className="mx-auto rounded-md touch-none"
      ></canvas>
      <div className="flex justify-center space-x-2">
        <select
          defaultValue="Type"
          onChange={(e) => {
            const value = e.target.value;
            setImg(value);
          }}
          className={`border p-1 m-2 rounded-xl border-black shadow-md print:hidden`}
        >
          <option value="Type" disabled>
            {images.type}
          </option>
          <option value={PriorDamage}>{images.sedan}</option>
          <option value={Compact}>{images.compact}</option>
          <option value={Truck}>{images.truck}</option>
          <option value={Suv}>{images.suv}</option>
        </select>

        <button
          onClick={undoLast}
          disabled={!isUndoAvailable} // Disable button if no undo available
          className={`border p-1 m-2 w-20 rounded-xl border-black shadow-md print:hidden ${
            !isUndoAvailable ? "opacity-50" : ""
          }`}
        >
          {misc[4]}
        </button>
        <button
          onClick={clearCanvas}
          disabled={!isUndoAvailable}
          className={`border p-1 m-2 w-20 rounded-xl border-black shadow-md print:hidden ${
            !isUndoAvailable ? "opacity-50" : ""
          }`}
        >
          {misc[3]}
        </button>
      </div>
    </div>
  );
}
