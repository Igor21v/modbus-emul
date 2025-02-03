import { ChangeEvent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.css';
import { genericMemo } from 'shared/lib/components/GenericMemo/GenericMemo';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
  validateError?: boolean;
  notSelectedEnable?: boolean;
  column?: boolean;
  center?: boolean;
}

const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, onChange, readonly, validateError, notSelectedEnable, column, center, ...rest } =
    props;
  const optionsList = options?.map((opt) => (
    <option className={cls.option} value={opt.value} key={opt.value}>
      {opt.content}
    </option>
  ));

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };
  const mods = {
    [cls.column]: column,
    [cls.center]: center,
  };
  const selectMods = {
    [cls.validateError]: validateError,
    [cls.center]: center,
  };
  const labelMods = {
    [cls.center]: center,
  };

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      <label htmlFor={label} className={classNames(cls.labelWrap, labelMods)}>
        {label && <span className={cls.label}>{`${label}`}</span>}
      </label>
      <select
        disabled={readonly}
        className={classNames(cls.select, selectMods, [])}
        value={value}
        onChange={onChangeHandler}
        id={label}
        {...rest}
      >
        {notSelectedEnable && (
          <option className={cls.option} value="not selected">
            {'not selected'}
          </option>
        )}
        {optionsList}
      </select>
    </div>
  );
};

const SelectMemo = genericMemo(Select);
export { SelectMemo as Select };
