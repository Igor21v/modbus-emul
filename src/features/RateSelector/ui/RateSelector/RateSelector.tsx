import { memo, useState } from 'react';
import cls from './RateSelector.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select';

interface RateSelectorProps {
  className?: string;
}

export const RateSelector = memo((props: RateSelectorProps) => {
  const { className } = props;
  const [rate, setRate] = useState('9600');
  const rates = [1200, 2400, 4800, 9600, 19200, 57600, 115200];
  const options: SelectOption<string>[] = rates.map((rate) => {
    return {
      value: `${rate}`,
      content: `${rate}`,
    };
  });

  return (
    <div className={classNames(cls.RateSelector, {}, [className])}>
      <Select
        options={options}
        label="Скорость"
        value={rate}
        onChange={setRate}
      />
    </div>
  );
});
