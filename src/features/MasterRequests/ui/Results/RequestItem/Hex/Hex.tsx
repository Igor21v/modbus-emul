import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input';
import cls from './Hex.module.css';

interface HexProps {
  className?: string;
  value: number;
  setContentReg: (content: number) => void;
  editable: boolean;
}

export const Hex = memo((props: HexProps) => {
  const { className, value, setContentReg, editable } = props;
  const renderVal = value.toString(16);
  const setContent = useCallback(
    (content: string) => {
      const valNum = parseInt(content, 16);
      setContentReg(valNum);
    },
    [renderVal],
  );

  return <Input value={renderVal} className={cls.Hex} onChange={setContent} readOnly={!editable} classNameInput={cls.input} />;
});
