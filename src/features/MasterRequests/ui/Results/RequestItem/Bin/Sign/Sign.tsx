import { memo, useCallback } from 'react';
import cls from './Sign.module.css';
import { TextSpan, TextSpanTheme } from 'shared/ui/TextSpan';
import { classNames } from 'shared/lib/classNames/classNames';

interface BinProps {
  className?: string;
  sign: string;
  setSymbol: (position: number, sign: string) => void;
  position: number;
  editable: boolean;
}

export const Sign = memo((props: BinProps) => {
  const { className, sign, position, setSymbol } = props;
  let theme: TextSpanTheme = 'primary';
  let bold = false;
  const setSymbolHandler = useCallback(() => {
    if (sign !== '_') setSymbol(position, sign);
  }, [setSymbol]);
  if (sign === '1') {
    bold = true;
    theme = 'success';
  }
  const mods = {
    [cls.significant]: sign !== '_',
  };

  return <TextSpan text={sign} className={classNames(cls.Sign, mods)} theme={theme} bold={bold} onClick={setSymbolHandler} />;
});
