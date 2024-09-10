import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.css';

export type AppLinkTheme = 'primary' | 'secondary' | 'red';

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
  preventChangeOpacity?: boolean;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    children,
    to,
    theme = 'primary',
    preventChangeOpacity,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(
        cls.AppLink,
        { [cls.changeOpacity]: !preventChangeOpacity },
        [className, cls[theme]],
      )}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
