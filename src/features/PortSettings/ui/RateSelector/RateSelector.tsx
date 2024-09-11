import { memo, useState } from 'react';
import cls from './RateSelector.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/providers/StoreProvider/config/store';
import { portActions } from 'features/RateSelector/model/slice/portSlice';

interface RateSelectorProps {
  className?: string;
}

export const RateSelector = memo((props: RateSelectorProps) => {
  const { className } = props;
  const rate = useSelector((state: RootState) => state.port.rate);
  const dispatch = useDispatch();
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
        onChange={(value) => dispatch(portActions.setRate(value))}
      />
    </div>
  );
});
