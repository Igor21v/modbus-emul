import { memo, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppImage } from 'shared/ui/AppImage';
import { Card } from 'shared/ui/Card';
import { Text } from 'shared/ui/Text';
import laptop from 'shared/img/laptop.png';
import cls from './ListenScheme.module.css';

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
        ctx.beginPath();
        ctx.arc(200, 200, 30, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = 'blue';
        ctx.fill();
      }
    }
  }

  return (
    <div className={classNames(cls.ListenScheme, {}, [className])}>
      <Card className={cls.master}>
        <Text text="Master" align="center" className={cls.text} />
      </Card>
      <Card className={cls.slave1}>
        <Text text="Slave1" align="center" className={cls.text} />
      </Card>
      <Card className={cls.slave2}>
        <Text text="Slave2" align="center" className={cls.text} />{' '}
      </Card>
      <Card className={cls.slave3}>
        <Text text="Slave..." align="center" className={cls.text} />{' '}
      </Card>
      <Card className={cls.converter} theme="outlined">
        <Text
          text="Преобразователь интерфейса"
          align="center"
          italic
          className={cls.text}
        />
      </Card>
      <AppImage src={laptop} className={cls.laptop} />
      <canvas
        width={650}
        height={400}
        ref={canvas}
        className={cls.canvas}
      ></canvas>
    </div>
  );
});
