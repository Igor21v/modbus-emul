import { memo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select';
import cls from './ViewSelect.module.css';
import { ViewType } from 'features/MasterRequests/model/slice/requests';

interface FCSelectProps {
  view: ViewType;
  onChange: (val: ViewType) => void;
}

export const ViewSelect = memo((props: FCSelectProps) => {
  const { view, onChange } = props;

  const options: SelectOption<ViewType>[] = [
    {
      value: 10,
      content: 'dec',
    },
    {
      value: 16,
      content: 'hex',
    },
    {
      value: 2,
      content: 'bin',
    },
  ];

  return <Select className={cls.RateSelector} options={options} value={view} onChange={onChange} column />;
});
