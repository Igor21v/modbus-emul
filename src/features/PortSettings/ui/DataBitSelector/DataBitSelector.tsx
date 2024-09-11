import { memo, useState } from 'react';
import cls from './DataBitSelector.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select';

interface BitInByteSelectorProps {
  className?: string;
}

export const BitInByteSelector = memo((props: BitInByteSelectorProps) => {
  const { className } = props;
  const [bits, setBits] = useState('8');
  const variants = [8, 7];
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
      label="Бит данных"
      value={bits}
      onChange={setBits}
    />
  );
});
