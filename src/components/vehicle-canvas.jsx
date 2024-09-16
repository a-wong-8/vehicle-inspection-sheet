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
      ctx.canvas.width = 450;
      ctx.canvas.height = 250;
      drawImage();
    };

    const getPosition = (event) => {
      //   const canvasBounds = canvas.getBoundingClientRect();
      coord.current.x = event.clientX - canvas.offsetLeft;
      coord.current.y = event.clientY - canvas.offsetTop;
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
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mousemove", sketch);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousedown", startPainting);
      canvas.removeEventListener("mouseup", stopPainting);
      canvas.removeEventListener("mousemove", sketch);
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
      <span className="bg-black text-white w-full flex justify-center">
        Prior Body Damage (Draw with mouse)
      </span>
      <canvas
        ref={canvasRef}
        id="canvas"
        className="mx-auto rounded-md"
      ></canvas>
      <button onClick={clearCanvas} className="border p-1 m-2 w-20 rounded-xl border-black shadow-md">
        Clear
      </button>
    </div>
  );
}
