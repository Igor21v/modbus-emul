import { memo } from 'react';
import cls from './Logbar.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface LogbarProps {
  className?: string;
}

export const Logbar = memo((props: LogbarProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Logbar, {}, [className])}>Панель логов</div>
  );
});
