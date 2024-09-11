import { memo, useState } from 'react';
import cls from './DataBitSelector.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/providers/StoreProvider/config/store';
import { portActions } from 'features/PortSettings/model/slice/portSlice';

interface BitInByteSelectorProps {
  className?: string;
}

export const BitInByteSelector = memo((props: BitInByteSelectorProps) => {
  const { className } = props;
  const dispatch = useDispatch();
  const dataBits = useSelector((state: RootState) => state.port.dataBit);
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
      value={dataBits}
      onChange={(value) => dispatch(portActions.setDataBit(value))}
    />
  );
});
