import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Badge.module.css';

export type BadgeTheme = 'primary' | 'inverted' | 'error' | 'success' | 'bright' | 'inverted_bright';

type TextAlign = 'right' | 'left' | 'center';

type TextSize = 'size_s' | 'size_m' | 'size_l';

export interface BadgeProps {
  className?: string;
  classNameText?: string;
  text?: string;
  theme?: BadgeTheme;
  align?: TextAlign;
  size?: TextSize;
  italic?: boolean;
  minLineHeight?: boolean;
  hint?: string;
  max?: boolean;
}

/**
 * Компонент значка
 * text - текст
 * theme - тема TextTheme
 * align - выравнивание
 * size - размер TextSize
 * italic - добавляет курсив
 * minLineHeight - уменьшает междустрочный интервал
 * badge - превращает текст в значек
 */

export const Badge = memo((props: BadgeProps) => {
  const {
    className,
    text,
    theme = 'primary',
    align = 'left',
    size = 'size_m',
    italic,
    classNameText,
    minLineHeight,
    hint,
    max,
  } = props;

  const additional = [className, cls[theme], cls[align], cls[size]];
  const mods = {
    [cls.italic]: italic,
    [cls.minLineHeight]: minLineHeight,
    [cls.max]: max,
  };
  return (
    <div className={classNames('', mods, additional)} title={hint}>
      <p className={classNames(cls.text, {}, [classNameText])}>{text}</p>
    </div>
  );
});
