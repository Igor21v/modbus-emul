import { SVGProps, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.css';

export type IconTheme = 'primary' | 'inverted' | 'error' | 'success';

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
  theme?: IconTheme;
}

export const Icon = memo((props: IconProps) => {
  const {
    className,
    classNameWrap,
    inverted,
    Svg,
    height = 24,
    width = 24,
    onClick,
    hint,
    theme = 'primary',
    ...otherProps
  } = props;
  /*   const mods = {
    [cls.error]: error,
    [cls.success]: success,
  }; */
  const Image = () => (
    <Svg
      className={classNames(cls.Icon, {}, [className, cls[theme]])}
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
