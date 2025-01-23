import React, { InputHTMLAttributes, useRef, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './InputNum.module.css';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';

// Компонент для ввода числового занчения, имеет собственное состояние для корректной обработки пустой строки

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'type'>;

interface InputNumProps extends HTMLInputProps {
  className?: string;
  classNameInput?: string;
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
    classNameInput,
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
  let valNum = Number(val);
  const isMin = min !== undefined && valNum < min;
  const isMax = max !== undefined && valNum > max;
  const onBlur = () => {
    focusHandler?.(false);
    setFocus(false);
    if (isMin) {
      valNum = min;
    } else if (isMax) {
      valNum = max;
    }
    onChange?.(valNum);
    setVal(`${valNum}`);
    console.log('Blur ' + valNum);
  };
  const onFocus = () => {
    focusHandler?.(true);
    setFocus(true);
  };
  const [focus, setFocus] = useState(focusIsSet);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valNum = Number(e.target.value);
    if (min !== undefined && valNum >= min && max !== undefined && valNum <= max) {
      onChange?.(valNum);
    }
    setVal(e.target.value);
  };
  const modsWrapper: Mods = {
    [cls.validateError]: isMin || isMax,
    [cls.canEdit]: canEdit,
    [cls.focus]: focus,
  };
  const modsInput: Mods = {
    [cls.readOnly]: readOnly,
  };
  return (
    <div className={classNames(cls.wrapper, modsWrapper, [className])} title={title}>
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
        className={classNames(cls.input, modsInput, [classNameInput])}
        autoFocus={autoFocus}
        id={idInput}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};
