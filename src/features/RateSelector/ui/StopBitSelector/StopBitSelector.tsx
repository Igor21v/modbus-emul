import { memo, useState } from 'react';
import cls from './StopBitSelector.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select';

interface StopBitSelectorProps {
  className?: string;
}

export const StopBitSelector = memo((props: StopBitSelectorProps) => {
  const { className } = props;
  const [bits, setBits] = useState('1');
  const variants = [1, 1.5, 2];
  const options: SelectOption<string>[] = variants.map((rate) => {
    return {
      value: `${rate}`,
      content: `${rate}`,
    };
  });

  return (
    <Select
      className={classNames(cls.RateSelector, {}, [className])}
      options={options}
      label="Стоп бит"
      value={bits}
      onChange={setBits}
    />
  );
});
