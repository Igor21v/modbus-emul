import { memo } from 'react';
import cls from './Logbar.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Log } from 'entities/Log';

interface LogbarProps {
  className?: string;
}

export const Logbar = memo((props: LogbarProps) => {
  const { className } = props;

  return <Log />;
});
