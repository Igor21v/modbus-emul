import { memo } from 'react';
import cls from './Leftbar.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface LeftbarProps {
  className?: string;
}

export const Leftbar = memo((props: LeftbarProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Leftbar, {}, [className])}>Навигация</div>
  );
});
