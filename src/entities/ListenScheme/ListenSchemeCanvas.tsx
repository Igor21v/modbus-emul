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
        ctx.beginPath();
        ctx.arc(200, 200, 30, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = 'blue';
        ctx.fill();
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
