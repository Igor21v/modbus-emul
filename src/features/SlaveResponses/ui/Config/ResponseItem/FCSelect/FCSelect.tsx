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
      content: '1: Чтение D(Coil)',
    },
    {
      value: '2',
      content: '2: Чтение D(Input)',
    },
    {
      value: '3',
      content: '3: Чтение A(Holding)',
    },
    {
      value: '4',
      content: '4: Чтение A(Input)',
    },
    {
      value: '5',
      content: '5: Запись одного D',
    },
    {
      value: '6',
      content: '6: Запсь одного A',
    },
    {
      value: '15',
      content: '15: Запись неск. D',
    },
    {
      value: '16',
      content: '16: Запись неск. A',
    },
  ];

  return <Select className={cls.RateSelector} options={options} value={fCode} onChange={onChange} column />;
});
