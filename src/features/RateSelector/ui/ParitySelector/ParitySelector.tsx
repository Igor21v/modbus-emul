import { memo, useState } from 'react';
import cls from './ParitySelector.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select';

interface ParitySelectorProps {
  className?: string;
}

export const ParitySelector = memo((props: ParitySelectorProps) => {
  const { className } = props;
  const [parity, setParity] = useState('none');
  const options: SelectOption<string>[] = [
    {
      value: `none`,
      content: 'None (отключен)',
    },
    {
      value: `even`,
      content: 'Even (четность)',
    },
    {
      value: `odd`,
      content: 'ODD (нечетность)',
    },
  ];

  return (
    <Select
      className={classNames(cls.RateSelector, {}, [className])}
      options={options}
      label="Контроль чётности"
      value={parity}
      onChange={setParity}
    />
  );
});
