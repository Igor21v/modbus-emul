import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.css';

export type TextTheme =
  | 'primary'
  | 'inverted'
  | 'error'
  | 'success'
  | 'bright'
  | 'inverted_bright';

type TextAlign = 'right' | 'left' | 'center';

type TextSize = 'size_s' | 'size_m' | 'size_l';

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'p';

export interface TextProps {
  className?: string;
  classNameTitle?: string;
  classNameText?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  HeaderTag?: HeaderTagType;
  italic?: boolean;
  minLineHeight?: boolean;
  badge?: boolean;
}

/**
 * Компонент текста
 * title - заголовок
 * text - текст
 * theme - тема TextTheme
 * align - выравнивание
 * size - размер TextSize
 * HeaderTag - тег для title
 * italic - добавляет курсив
 * minLineHeight - уменьшает междустрочный интервал
 * badge - превращает текст в значек
 */

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = 'primary',
    align = 'left',
    size = 'size_m',
    HeaderTag = 'p',
    italic,
    classNameTitle,
    classNameText,
    minLineHeight,
    badge,
  } = props;

  const additional = [className, cls[theme], cls[align], cls[size]];
  const mods = {
    [cls.italic]: italic,
    [cls.minLineHeight]: minLineHeight,
  };
  return (
    <div className={classNames('', mods, additional)}>
      {title && (
        <HeaderTag className={classNames(cls.title, {}, [classNameTitle])}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p
          className={classNames(cls.text, { [cls.badge]: badge }, [
            classNameText,
          ])}
        >
          {text}
        </p>
      )}
    </div>
  );
});
