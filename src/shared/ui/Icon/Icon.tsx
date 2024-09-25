import { SVGProps, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.css';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  inverted?: boolean;
  Svg: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  onClick?: () => void;
}

export const Icon = memo((props: IconProps) => {
  const {
    className,
    inverted,
    Svg,
    height = 24,
    width = 24,
    onClick,
    ...otherProps
  } = props;
  return (
    <button className={cls.button} onClick={onClick}>
      <Svg
        className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
          className,
        ])}
        {...otherProps}
        height={height}
        width={width}
      />
    </button>
  );
});
