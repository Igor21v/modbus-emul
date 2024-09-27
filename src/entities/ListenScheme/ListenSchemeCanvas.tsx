import { memo, useEffect, useRef } from 'react';
import cls from './ListenScheme.module.css';

export const ListenSchemeCanvas = memo(() => {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    draw();
  }, []);
  function draw() {
    if (canvas.current?.getContext) {
      const ctx = canvas.current?.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'blue';
        ctx.strokeStyle = '#dbdbdb';
        ctx.strokeRect(85, 50, 20, 300);
        ctx.strokeRect(140, 365, 500, 20);
        ctx.beginPath();
        ctx.moveTo(85, 120);
        ctx.lineTo(150, 185);
        ctx.lineTo(250, 185);
        ctx.moveTo(250, 165);
        ctx.lineTo(155, 165);
        ctx.lineTo(105, 120);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(390, 175);
        ctx.lineWidth = 1;
        ctx.lineTo(600, 90);
        ctx.stroke();
      }
    }
  }

  return (
    <canvas
      width={650}
      height={400}
      ref={canvas}
      className={cls.canvas}
    ></canvas>
  );
});
