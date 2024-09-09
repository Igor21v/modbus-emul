import { memo } from 'react';
import cls from './Rightbar.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface RightbarProps {
  className?: string;
}

export const Rightbar = memo((props: RightbarProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Rightbar, {}, [className])}>
      Настройки порта
    </div>
  );
});
