import { RefObject, memo, useEffect, useRef } from 'react';
import cls from './Toggle.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface ToggleProps {
  className?: string;
  onChange: () => void;
  checked?: boolean;
  title?: string;
}

export const Toggle = memo((props: ToggleProps) => {
  const { className, onChange, checked, title } = props;
  return (
    <label className={classNames(cls.Toggle, {}, [className, cls.toss_toggle__pristine])} title={title}>
      <input className={cls.toss_toggle__input} type="checkbox" onChange={onChange} checked={checked} />
      <span className={cls.toss_toggle__ball}></span>
    </label>
  );
});
