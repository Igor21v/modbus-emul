import { memo, useEffect, useRef } from 'react';
import cls from './ListenScheme.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface ListenSchemeProps {
  className?: string;
}

export const ListenScheme = memo((props: ListenSchemeProps) => {
  const { className } = props;
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    draw();
  }, []);
  function draw() {
    if (canvas.current?.getContext) {
      const ctx = canvas.current?.getContext('2d');
      if (ctx) {
        var ball = {
          x: 100,
          y: 100,
          radius: 25,
          color: 'blue',
          draw: function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
          },
        };

        ball.draw();
      }
    }
  }

  return (
    <canvas
      width={700}
      height={500}
      ref={canvas}
      className={classNames(cls.ListenScheme, {}, [className])}
    >
      {' '}
    </canvas>
  );
});
