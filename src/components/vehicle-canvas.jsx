import React, { useRef, useEffect } from "react";
import PriorDamage from "../images/prior-damage.png";

export default function VehicleCanvas() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const coord = useRef({ x: 0, y: 0 });
  const paint = useRef(false);

  const drawImage = () => {
    const img = new Image();
    const ctx = ctxRef.current;
    img.src = PriorDamage;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
    };
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
      paint.current = false;
    };

    const sketch = (event) => {
      if (!paint.current) return;

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

    window.addEventListener("resize", resize);

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
  }, []);

  const clearCanvas = () => {
    const ctx = ctxRef.current;
    if (ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      drawImage();
    }
  };

  return (
    <div className="w-full mx-auto border">
      <h2 className="bg-black text-white w-full flex justify-center">
        Prior Body Damage (Draw with mouse or touch)
      </h2>
      <canvas
        ref={canvasRef}
        id="canvas"
        className="mx-auto rounded-md touch-none"
      ></canvas>
      <button onClick={clearCanvas} className="border p-1 m-2 w-20 rounded-xl border-black shadow-md">
        Clear
      </button>
    </div>
  );
}
