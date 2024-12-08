import { memo } from 'react';
import cls from './Results.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface ResultsProps {
  className?: string;
}

export const Results = memo((props: ResultsProps) => {
  const { className } = props;

  return <div className={classNames(cls.Results, {}, [className])}>Результаты запросов</div>;
});
