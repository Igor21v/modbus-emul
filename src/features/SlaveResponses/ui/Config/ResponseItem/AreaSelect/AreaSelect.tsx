import { memo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select';
import cls from './AreaSelect.module.css';

interface FCSelectProps {
  area: string;
  onChange: (val: string) => void;
}

export const AreaSelect = memo((props: FCSelectProps) => {
  const { area, onChange } = props;

  const options: SelectOption<string>[] = [
    {
      value: '1',
      content: '1X (DO Coils)',
    },
    {
      value: '2',
      content: '2X (DI Contacts)',
    },
    {
      value: '3',
      content: '3X  (AI Registers)',
    },
    {
      value: '4',
      content: '4X (AO Holding Registers)',
    },
  ];

  return <Select className={cls.RateSelector} options={options} value={area} onChange={onChange} column />;
});
