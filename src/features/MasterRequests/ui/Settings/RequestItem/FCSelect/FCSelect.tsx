import { memo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select';
import cls from './FCSelect.module.css';

interface FCSelectProps {
  fCode: string;
  onChange: (val: string) => void;
}

export const FCSelect = memo((props: FCSelectProps) => {
  const { fCode, onChange } = props;

  const options: SelectOption<string>[] = [
    {
      value: '1',
      content: '1: Чтение DO',
    },
    {
      value: '2',
      content: '2: Чтение DI',
    },
    {
      value: '3',
      content: '3: Чтение AO',
    },
    {
      value: '4',
      content: '4: Чтение AI',
    },
  ];

  return <Select className={cls.RateSelector} options={options} value={fCode} onChange={onChange} column />;
});
