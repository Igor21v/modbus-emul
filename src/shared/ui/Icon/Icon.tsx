import { SVGProps, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.css';

export interface SvgProps extends SVGProps<SVGSVGElement> {
  title?: string;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  classNameWrap?: string;
  inverted?: boolean;
  Svg: (props: SvgProps) => JSX.Element;
  onClick?: () => void;
  hint?: string;
}

export const Icon = memo((props: IconProps) => {
  const { className, classNameWrap, inverted, Svg, height = 24, width = 24, onClick, hint, ...otherProps } = props;
  const Image = () => (
    <Svg
      className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}
      {...otherProps}
      height={height}
      width={width}
      title={hint}
    />
  );
  if (onClick)
    return (
      <button className={classNames(cls.button, {}, [classNameWrap])} onClick={onClick} title={hint}>
        <Image />
      </button>
    );
  return <Image />;
});
