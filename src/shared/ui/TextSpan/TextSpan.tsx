import { HTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TextSpan.module.css';

export type TextSpanTheme = 'primary' | 'inverted' | 'error' | 'success' | 'bright' | 'inverted_bright' | 'second';
type TextAlign = 'right' | 'left' | 'center';
type TextSize = 'size_s' | 'size_m' | 'size_l';

export interface TextSpanProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  text: string;
  theme?: TextSpanTheme;
  align?: TextAlign;
  size?: TextSize;
  italic?: boolean;
  underline?: boolean;
  bold?: boolean;
}

export const TextSpan = memo((props: TextSpanProps) => {
  const { className, text, theme = 'primary', align = 'left', size = 'size_m', italic, underline, bold, ...rest } = props;

  const additional = [className, cls[theme], cls[align], cls[size]];
  const mods = {
    [cls.italic]: italic,
    [cls.underline]: underline,
    [cls.bold]: bold,
  };
  return (
    <span className={classNames('', mods, additional)} {...rest}>
      {text}
    </span>
  );
});
