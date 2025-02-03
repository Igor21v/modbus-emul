import { RootState } from 'app/providers/StoreProvider/config/store';
import { portActions } from 'features/PortSettings/model/slice/portSlice';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { Select, SelectOption } from 'shared/ui/Select';
import cls from './StopBitSelector.module.css';

interface StopBitSelectorProps {
  className?: string;
}

export const StopBitSelector = memo((props: StopBitSelectorProps) => {
  const { className } = props;
  const stopBits = useAppSelector((state: RootState) => state.port.stopBits);
  const dispatch = useAppDispatch();
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
      value={stopBits}
      onChange={(value) => dispatch(portActions.setStopBit(value))}
      center
    />
  );
});
