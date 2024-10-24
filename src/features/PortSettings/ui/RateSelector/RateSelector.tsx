import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { Select, SelectOption } from 'shared/ui/Select';
import { portActions } from '../../model/slice/portSlice';
import cls from './RateSelector.module.css';

interface RateSelectorProps {
  className?: string;
}

export const RateSelector = memo((props: RateSelectorProps) => {
  const { className } = props;
  const baudRate = useAppSelector((state) => state.port.baudRate);
  const dispatch = useAppDispatch();
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
        value={baudRate}
        onChange={(value) => dispatch(portActions.setRate(value))}
      />
    </div>
  );
});
