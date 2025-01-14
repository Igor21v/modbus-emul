import { memo } from 'react';
import cls from './Bin.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { TextSpan, TextSpanTheme } from 'shared/ui/TextSpan';

interface BinProps {
  className?: string;
  sign: string;
}

export const Sign = memo((props: BinProps) => {
  const { className, sign } = props;
  let theme: TextSpanTheme = 'primary';
  let bold = false;
  if (sign === '1') {
    bold = true;
    theme = 'success';
  }
  return <TextSpan text={sign} className={cls.Bin} theme={theme} bold={bold} />;
});
