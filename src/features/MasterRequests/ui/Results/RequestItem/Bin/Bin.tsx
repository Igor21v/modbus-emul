import { memo } from 'react';
import cls from './Bin.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { TextSpan } from 'shared/ui/TextSpan';
import { Sign } from './Sign';

interface BinProps {
  className?: string;
  value: number;
}

export const Bin = memo((props: BinProps) => {
  const { className, value } = props;
  let str = '0'.repeat(15) + value.toString(2);
  const renderVal = str.slice(-16, -12) + ' ' + str.slice(-12, -8) + ' ' + str.slice(-8, -4) + ' ' + str.slice(-4);
  const arrVal = renderVal.split('');

  return (
    <div>
      {arrVal.map((char, index) => (
        <Sign sign={char} key={index} />
      ))}
    </div>
  );
});
