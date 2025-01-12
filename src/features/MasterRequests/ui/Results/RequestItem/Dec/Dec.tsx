import { memo } from 'react';
import cls from './Dec.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { TextSpan } from 'shared/ui/TextSpan';

interface DecProps {
  className?: string;
  value: number;
}

export const Dec = memo((props: DecProps) => {
  const { className, value } = props;
  const renderVal = value.toString(10);

  return <TextSpan text={renderVal} className={classNames(cls.Bin, {}, [className])} />;
});
