import { memo } from 'react';
import cls from './Bin.module.css';

import { Sign } from './Sign/Sign';

interface BinProps {
  className?: string;
  value: number;
}

export const Bin = memo((props: BinProps) => {
  const { className, value } = props;
  let str = '0'.repeat(15) + value.toString(2);
  const renderVal = str.slice(-16, -12) + '_' + str.slice(-12, -8) + '_' + str.slice(-8, -4) + '_' + str.slice(-4);
  const arrVal = renderVal.split('');

  return (
    <div>
      {arrVal.map((char, index) => (
        <Sign sign={char} key={index} />
      ))}
    </div>
  );
});
