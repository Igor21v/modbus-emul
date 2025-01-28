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
      content: 'DO (coil)',
    },
    {
      value: '2',
      content: 'DI (input)',
    },
    {
      value: '3',
      content: 'AI (input)',
    },
    {
      value: '4',
      content: 'AO (holding)',
    },
  ];

  return <Select className={cls.RateSelector} options={options} value={area} onChange={onChange} column />;
});
