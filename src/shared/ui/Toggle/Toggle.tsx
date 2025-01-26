import { RefObject, memo, useEffect, useRef } from 'react';
import cls from './Toggle.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface ToggleProps {
  className?: string;
  onChange: () => void;
  checked?: boolean;
  title?: string;
  text?: string;
}

export const Toggle = memo((props: ToggleProps) => {
  const { className, onChange, checked, title, text } = props;
  const pristine = useRef(cls.pristine);
  useEffect(() => {
    pristine.current = '';
  }, []);

  return (
    <div className={cls.wrap} title={title}>
      {text}
      <label className={classNames(cls.Toggle, {}, [className, pristine.current])}>
        <input className={cls.toss_toggle__input} type="checkbox" onChange={onChange} checked={checked} />
        <span className={cls.toss_toggle__ball}></span>
      </label>
    </div>
  );
});
