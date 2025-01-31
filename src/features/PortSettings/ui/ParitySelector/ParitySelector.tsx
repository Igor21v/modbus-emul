import { RootState } from 'app/providers/StoreProvider/config/store';
import { portActions } from 'features/PortSettings/model/slice/portSlice';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { Select, SelectOption } from 'shared/ui/Select';
import cls from './ParitySelector.module.css';

interface ParitySelectorProps {
  className?: string;
}

export const ParitySelector = memo((props: ParitySelectorProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const parity = useAppSelector((state) => state.port.parity);
  const options: SelectOption<string>[] = [
    {
      value: `none`,
      content: 'None',
    },
    {
      value: `even`,
      content: 'Even',
    },
    {
      value: `odd`,
      content: 'Odd',
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
