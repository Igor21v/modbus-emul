import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input';
import cls from './Hex.module.css';

interface HexProps {
  value: number;
  setContentReg: (content: number) => void;
  editable: boolean;
}

export const Hex = memo((props: HexProps) => {
  const { value, setContentReg, editable } = props;
  const renderVal = value.toString(16);
  const setContent = useCallback(
    (val: string) => {
      let valNum = parseInt(val, 16);
      if (Number.isNaN(valNum) || valNum < 0) {
        valNum = 0;
      } else if (valNum > 65535) {
        valNum = 65535;
      }
      setContentReg(valNum);
      console.log(valNum);
    },
    [renderVal],
  );

  return <Input value={renderVal} className={cls.Hex} onChange={setContent} readOnly={!editable} classNameInput={cls.input} />;
});
