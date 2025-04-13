import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { colors, shapes } from "../../const";
import { addLayer } from "../../store/canvasSlice";

const CanvasComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { selectedTool, selectedColor, selectedShape } = useSelector(
    (state: RootState) => state.tools
  );

  const { layers } = useSelector((state: RootState) => state.canvas);
  const dispatch = useDispatch();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    layers?.forEach((layer) => {
      layer.draw(ctx);
    });
  }, [layers]);

  const handleCanvasClick = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (selectedTool === "shape") {
      const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = colors[selectedColor] || "black";
        if (shapes[selectedShape].type === "circle") {
          ctx.beginPath();
          ctx.arc(x, y, 40, 0, 2 * Math.PI);
          ctx.fill();
        } else if (shapes[selectedShape].type === "oval") {
          ctx.beginPath();
          ctx.ellipse(x, y, 80, 30, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (shapes[selectedShape].type === "rectangle") {
          ctx.beginPath();
          ctx.rect(x, y, 100, 50);
          ctx.fill();
        } else if (shapes[selectedShape].type === "square") {
          ctx.beginPath();
          ctx.rect(x, y, 80, 80);
          ctx.fill();
        }
      };
      dispatch(addLayer({ draw }));
    }

    if (selectedTool === "fill") {
      const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = colors[selectedColor] || "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      };
      dispatch(addLayer({ draw }));
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={400}
      onClick={handleCanvasClick}
      style={{ border: "1px solid black" }}
    />
  );
};

export default CanvasComponent;
