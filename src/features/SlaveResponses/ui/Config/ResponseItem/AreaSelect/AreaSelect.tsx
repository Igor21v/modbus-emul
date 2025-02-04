import { memo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select';
import cls from './AreaSelect.module.css';
import { areas } from 'features/SlaveResponses/model/const/areas';

interface FCSelectProps {
  area: string;
  onChange: (val: string) => void;
}

export const AreaSelect = memo((props: FCSelectProps) => {
  const { area, onChange } = props;

  const options: SelectOption<string>[] = [
    {
      value: '1',
      content: areas[1],
    },
    {
      value: '2',
      content: areas[2],
    },
    {
      value: '3',
      content: areas[3],
    },
    {
      value: '4',
      content: areas[4],
    },
  ];

  return <Select className={cls.RateSelector} options={options} value={area} onChange={onChange} column />;
});
