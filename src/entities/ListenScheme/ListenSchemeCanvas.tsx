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
        ctx.fillStyle = '#dbdbdb';
        ctx.strokeStyle = '#dbdbdb';
        ctx.lineWidth = 2;
        // Прямоугольник для отображения линий между слейв устройствами
        ctx.strokeRect(140, 365, 500, 20);

        ctx.font = '18px serif';
        // Надписи
        ctx.fillText('RS485', 448, 350);
        ctx.fillText('RS485', 192, 350);

        // Анимация для линии
        let pos = 0;
        let step1 = true;
        let count = 0;

        const drawAnim = () => {
          ctx.clearRect(80, 110, 180, 220);
          // Прямоугольник для линии между мастером  и слейвами
          ctx.strokeRect(85, 50, 20, 300);
          ctx.fillText('RS485', 125, 210);
          ctx.lineWidth = 2;
          ctx.beginPath();
          if (step1) {
            ctx.moveTo(250, 185);
            ctx.lineTo(250 - pos, 185);
            ctx.moveTo(250, 165);
            ctx.lineTo(250 - pos, 165);
            ctx.stroke();
          } else {
            ctx.moveTo(250, 185);
            ctx.lineTo(150, 185);
            ctx.lineTo(150 - pos, 185 - pos);

            ctx.moveTo(250, 165);
            ctx.lineTo(150, 165);
            ctx.lineTo(150 - pos, 165 - pos);
          }
          if ((pos === 100 && step1) || (pos === 65 && !step1)) {
            pos = 0;
            step1 = !step1;
            count++;
          } else {
            pos++;
          }
          ctx.stroke();
          if (count < 6) {
            requestAnimationFrame(drawAnim);
          }
        };
        requestAnimationFrame(drawAnim);

        // Линия между ноутбуком и преобразователем
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(390, 175);
        ctx.quadraticCurveTo(420, 183, 445, 153);
        ctx.quadraticCurveTo(470, 110, 500, 130);
        /* ctx.bezierCurveTo(490, 190, 410, 100, 500, 130); */
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