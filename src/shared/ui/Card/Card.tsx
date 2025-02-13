import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.css';

type CardTheme = 'normal' | 'outlined';

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  max?: boolean;
  shadow?: boolean;
}

export const Card = (props: CardProps) => {
  const { className, children, theme = 'outlined', max, shadow, ...otherProps } = props;
  const mods = {
    [cls.max]: max,
    [cls.shadow]: shadow,
  };
  return (
    <div className={classNames(cls.Card, mods, [className, cls[theme]])} {...otherProps}>
      {children}
    </div>
  );
};
