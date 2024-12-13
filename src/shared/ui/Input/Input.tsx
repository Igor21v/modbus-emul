import React, { InputHTMLAttributes, useRef, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.css';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps<T extends string | number | undefined> extends HTMLInputProps {
  className?: string;
  classNameWrapper?: string;
  value?: T;
  onChange?: (value: T) => void;
  autoFocus?: boolean;
  readOnly?: boolean;
  validateError?: boolean;
  focusIsSet?: boolean;
  focusHandler?: (value: boolean) => void;
  min?: number;
  max?: number;
}
export const Input = <T extends number | string | undefined>(props: InputProps<T>) => {
  const {
    className,
    classNameWrapper,
    value,
    type = 'text',
    placeholder,
    onChange,
    autoFocus,
    readOnly,
    validateError,
    focusIsSet,
    focusHandler,
    title,
    id,
    max,
    min,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const canEdit = !readOnly;
  let idInput = placeholder;
  if (id) idInput = id;
  useInitialEffect(() => {
    if (focusIsSet) {
      ref.current?.focus();
    }
  });
  const onBlur = () => {
    focusHandler?.(false);
    setFocus(false);
  };
  const onFocus = () => {
    focusHandler?.(true);
    setFocus(true);
  };
  const [focus, setFocus] = useState(focusIsSet);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'text' || type === 'password') {
      onChange?.(e.target.value as T);
    } else if (type === 'number') {
      let valNum = Number(e.target.value);
      if (min !== undefined && valNum < min) {
        valNum = min;
      } else if (max !== undefined && valNum > max) {
        valNum = max;
      }
      onChange?.(valNum as T);
    }
  };
  const mods: Mods = {
    [cls.readOnly]: readOnly,
    [cls.validateError]: validateError,
  };
  return (
    <div className={classNames(cls.wrapper, { [cls.canEdit]: canEdit, [cls.focus]: focus }, [classNameWrapper])} title={title}>
      <label htmlFor={idInput} className={cls.lable}>
        {value === '' ? '\u00A0' : placeholder}
      </label>
      <input
        ref={ref}
        type={type}
        onChange={onChangeHandler}
        disabled={readOnly}
        value={`${value}`}
        {...otherProps}
        className={classNames(cls.input, mods, [className])}
        autoFocus={autoFocus}
        id={idInput}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </div>
  );
};
