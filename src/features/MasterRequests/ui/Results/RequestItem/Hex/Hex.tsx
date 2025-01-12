import { memo } from 'react';
import cls from './Hex.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { TextSpan } from 'shared/ui/TextSpan';

interface HexProps {
  className?: string;
  value: number;
}

export const Hex = memo((props: HexProps) => {
  const { className, value } = props;
  const renderVal = value.toString(16);

  return <TextSpan text={renderVal} className={classNames(cls.Bin, {}, [className])} />;
});
