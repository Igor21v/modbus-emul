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
}

const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, onChange, readonly, validateError, notSelectedEnable, column, ...rest } = props;
  const optionsList = options?.map((opt) => (
    <option className={cls.option} value={opt.value} key={opt.value}>
      {opt.content}
    </option>
  ));

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  return (
    <p className={classNames(cls.Wrapper, { [cls.column]: column }, [className])}>
      <label htmlFor={label} className={cls.labelWrap}>
        {label && <span className={cls.label}>{`${label}`}</span>}
      </label>
      <select
        disabled={readonly}
        className={classNames(cls.select, { [cls.validateError]: validateError }, [])}
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
    </p>
  );
};

const SelectMemo = genericMemo(Select);
export { SelectMemo as Select };
