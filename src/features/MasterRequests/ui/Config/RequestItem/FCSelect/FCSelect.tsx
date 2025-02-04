import { memo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select';
import cls from './FCSelect.module.css';
import { functCodes } from '../../../../model/const/functCodes';

interface FCSelectProps {
  fCode: string;
  onChange: (val: string) => void;
}

export const FCSelect = memo((props: FCSelectProps) => {
  const { fCode, onChange } = props;

  const options: SelectOption<string>[] = [
    {
      value: '1',
      content: functCodes[1],
    },
    {
      value: '2',
      content: functCodes[2],
    },
    {
      value: '3',
      content: functCodes[3],
    },
    {
      value: '4',
      content: functCodes[4],
    },
    {
      value: '5',
      content: functCodes[5],
    },
    {
      value: '6',
      content: functCodes[6],
    },
    {
      value: '15',
      content: functCodes[15],
    },
    {
      value: '16',
      content: functCodes[16],
    },
  ];

  return <Select className={cls.RateSelector} options={options} value={fCode} onChange={onChange} column />;
});
