import React, { InputHTMLAttributes, useRef, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './InputNum.module.css';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';

// Компонент для ввода числового занчения, имеет собственное состояние для корректной обработки пустой строки

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'type'>;

interface InputNumProps extends HTMLInputProps {
  className?: string;
  classNameWrapper?: string;
  initVal?: number;
  onChange?: (value: number) => void;
  autoFocus?: boolean;
  readOnly?: boolean;
  validateError?: boolean;
  focusIsSet?: boolean;
  focusHandler?: (value: boolean) => void;
  min?: number;
  max?: number;
}
export const InputNum = (props: InputNumProps) => {
  const {
    className,
    classNameWrapper,
    initVal = 0,
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
  const [val, setVal] = useState(`${initVal}`);
  const canEdit = !readOnly;
  let idInput = placeholder;
  if (id) idInput = id;
  useInitialEffect(() => {
    if (focusIsSet) {
      ref.current?.focus();
    }
  });
  const onBlur = () => {
    setVal(`${initVal}`);

    focusHandler?.(false);
    setFocus(false);
  };
  const onFocus = () => {
    focusHandler?.(true);
    setFocus(true);
  };
  const [focus, setFocus] = useState(focusIsSet);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valNum = Number(e.target.value);
    if (min !== undefined && valNum < min) {
      valNum = min;
    } else if (max !== undefined && valNum > max) {
      valNum = max;
    }
    if (e.target.value === '') setVal(e.target.value);
    else setVal(`${valNum}`);

    onChange?.(valNum);
  };
  const mods: Mods = {
    [cls.readOnly]: readOnly,
    [cls.validateError]: validateError,
  };
  return (
    <div className={classNames(cls.wrapper, { [cls.canEdit]: canEdit, [cls.focus]: focus }, [classNameWrapper])} title={title}>
      <label htmlFor={idInput} className={cls.lable}>
        {placeholder}
      </label>
      <input
        ref={ref}
        type={'number'}
        onChange={onChangeHandler}
        disabled={readOnly}
        value={`${val}`}
        {...otherProps}
        className={classNames(cls.input, mods, [className])}
        autoFocus={autoFocus}
        id={idInput}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};
