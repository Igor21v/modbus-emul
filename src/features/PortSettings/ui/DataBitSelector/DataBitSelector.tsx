import { portActions } from 'features/PortSettings/model/slice/portSlice';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { Select, SelectOption } from 'shared/ui/Select';
import cls from './DataBitSelector.module.css';

interface BitInByteSelectorProps {
  className?: string;
}

export const BitInByteSelector = memo((props: BitInByteSelectorProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const dataBits = useAppSelector((state) => state.port.dataBits);
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
