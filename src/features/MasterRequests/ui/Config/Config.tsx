import { setRequest } from 'features/MasterRequests/model/services/setRequest';
import { memo } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { VStack } from 'shared/ui/Stack';
import cls from './Config.module.css';
import { SlaveItem } from './SlaveItem/SlaveItem';

interface SettingsProps {
  className?: string;
}

export const Config = memo((props: SettingsProps) => {
  const { className } = props;
  const requests = useAppSelector((state) => state.requests);
  const dispatch = useAppDispatch();
  const addSlaveHandler = () => {
    let newAdr = Object.values(requests).at(-1)?.adr;
    if (!newAdr || newAdr >= 255) newAdr = 1;
    else newAdr++;
    dispatch(setRequest({ type: 'addSlave', newAdr }));
  };
  return (
    <VStack className={classNames(cls.Config, {}, [className])} gap="32">
      <Button theme="outlineGreen" onClick={addSlaveHandler}>
        Добавить устройство
      </Button>
      {Object.entries(requests).map(([id, slave]) => (
        <SlaveItem slaveID={+id} key={id} slave={slave} />
      ))}
    </VStack>
  );
});
