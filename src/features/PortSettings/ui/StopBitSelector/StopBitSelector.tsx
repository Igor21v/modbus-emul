import { memo, useState } from 'react';
import cls from './StopBitSelector.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/providers/StoreProvider/config/store';
import { portActions } from 'features/PortSettings/model/slice/portSlice';

interface StopBitSelectorProps {
  className?: string;
}

export const StopBitSelector = memo((props: StopBitSelectorProps) => {
  const { className } = props;
  const stopBit = useSelector((state: RootState) => state.port.stopBit);
  const dispatch = useDispatch();
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
      value={stopBit}
      onChange={(value) => dispatch(portActions.setStopBit(value))}
    />
  );
});
