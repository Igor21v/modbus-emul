import { memo, useCallback } from 'react';

import { Sign } from './Sign/Sign';

interface BinProps {
  className?: string;
  value: number;
  setContentReg: (content: number) => void;
  editable: boolean;
}

export const Bin = memo((props: BinProps) => {
  const { className, value, setContentReg, editable } = props;
  let str = '0'.repeat(15) + value.toString(2);
  const renderVal = str.slice(-16, -12) + '_' + str.slice(-12, -8) + '_' + str.slice(-8, -4) + '_' + str.slice(-4);
  const arrVal = renderVal.split('');
  const setSymbol = useCallback(
    (position: number, sign: string) => {
      const newSign = sign === '1' ? '0' : '1';
      let newVal = renderVal.slice(-19, position) + newSign + renderVal.slice(position + 1);
      console.log(newVal);
      newVal = newVal.slice(-19, -15) + newVal.slice(-14, -10) + newVal.slice(-9, -5) + newVal.slice(-4);
      console.log(newVal);
      const valNum = parseInt(newVal, 2);
      console.log(valNum);
      setContentReg(valNum);
    },
    [renderVal],
  );

  return (
    <div>
      {arrVal.map((char, index) => (
        <Sign sign={char} key={index} position={index} setSymbol={setSymbol} editable={editable} />
      ))}
    </div>
  );
});
