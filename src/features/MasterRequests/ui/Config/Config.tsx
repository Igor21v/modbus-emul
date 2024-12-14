import { setMasterProp } from 'features/MasterRequests/model/services/setProp';
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
    const adrs = new Set();
    Object.values(requests).forEach((request) => {
      adrs.add(request.adr);
    });
    for (let i = 1; i < 255; i++) {
      if (!adrs.has(i)) {
        dispatch(setMasterProp({ addSlave: i }));
        break;
      }
    }
  };
  return (
    <VStack className={classNames(cls.MasterRequests, {}, [className])} gap="32">
      <Button theme="outlineGreen" onClick={addSlaveHandler}>
        Добавить устройство
      </Button>
      {Object.keys(requests).map((id) => (
        <SlaveItem slaveID={+id} key={id} />
      ))}
    </VStack>
  );
});
