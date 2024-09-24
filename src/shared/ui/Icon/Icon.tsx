import { SVGProps, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.css';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  inverted?: boolean;
  Svg: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export const Icon = memo((props: IconProps) => {
  const {
    className,
    inverted,
    Svg,
    height = 24,
    width = 24,
    ...otherProps
  } = props;
  return (
    <Svg
      className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
        className,
      ])}
      {...otherProps}
      height={height}
      width={width}
    />
  );
});
