import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.css';

export type ButtonTheme =
  | 'clear'
  | 'clearInverted'
  | 'outline'
  | 'outlineRed'
  | 'red'
  | 'background'
  | 'backgroundInverted'
  | 'outlineGreen';

export type ButtonSize = 'size_s' | 'size_m' | 'size_l' | 'size_xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  /**
   * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
   */
  theme?: ButtonTheme;
  /**
   * Флаг, делающий кнопку квадратной
   */
  square?: boolean;
  /**
   * Размер кнопки в соответствии с дизайн системой
   */
  size?: ButtonSize;
  /**
   * Флаг, отвечающий за работу кнопки
   */
  disabled?: boolean;
  /**
   * Содержимое кнопки
   */
  children?: ReactNode;
  /**
   * Увеличивает кнопку на всю свободную ширину
   */
  fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, theme = 'outline', square, disabled, size = 'size_m', fullWidth, ...otherProps } = props;
  const additional = [className, cls[theme], cls[size]];
  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  };
  return (
    <button type="button" className={classNames(cls.Button, mods, additional)} disabled={disabled} {...otherProps}>
      {children}
    </button>
  );
});
