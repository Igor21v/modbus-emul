import { memo, useState } from 'react';
import cls from './ParitySelector.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/providers/StoreProvider/config/store';
import { portActions } from 'features/PortSettings/model/slice/portSlice';

interface ParitySelectorProps {
  className?: string;
}

export const ParitySelector = memo((props: ParitySelectorProps) => {
  const { className } = props;
  const dispatch = useDispatch();
  const parity = useSelector((state: RootState) => state.port.parity);
  const options: SelectOption<string>[] = [
    {
      value: `none`,
      content: 'None (отключено)',
    },
    {
      value: `even`,
      content: 'Even (четность)',
    },
    {
      value: `odd`,
      content: 'ODD (нечетность)',
    },
  ];

  return (
    <Select
      className={classNames(cls.RateSelector, {}, [className])}
      options={options}
      label="Чётность"
      value={parity}
      onChange={(value) => dispatch(portActions.setParity(value))}
    />
  );
});
