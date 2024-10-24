import { memo } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Button } from 'shared/ui/Button';
import { openPort } from '../../model/services/openPort';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { closePort } from 'features/PortSettings/model/services/closePort';

interface OpenPortButtonProps {
  className?: string;
}

export const OpenPortButton = memo((props: OpenPortButtonProps) => {
  const dispatch = useAppDispatch();
  const openHandler = () => {
    dispatch(openPort());
  };
  const closeHandler = () => {
    dispatch(closePort());
  };
  const { portIsOpen } = useAppSelector((state) => state.port);

  if (portIsOpen) {
    return <Button onClick={closeHandler}>Закрыть порт</Button>;
  }
  return (
    <Button onClick={openHandler} theme="outlineRed">
      Выбрать порт
    </Button>
  );
});
