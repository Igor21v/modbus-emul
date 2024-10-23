import { memo } from 'react';
import cls from './MasterRequests.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { SlaveItem } from '../SlaveItem/SlaveItem';
import { Button } from 'shared/ui/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { addSlave } from 'features/MasterRequests/model/services/masterReq';

interface MasterRequestsProps {
  className?: string;
}

export const MasterRequests = memo((props: MasterRequestsProps) => {
  const { className } = props;
  const requests = useAppSelector((state) => state.requests);
  const dispatch = useAppDispatch();
  const addSlaveHandler = () => {
    for (let i = 1; i < 255; i++) {
      if (!requests[i]) {
        dispatch(addSlave(i));
        break;
      }
    }
  };
  return (
    <VStack
      className={classNames(cls.MasterRequests, {}, [className])}
      gap="32"
    >
      <Button theme="outlineGreen" onClick={addSlaveHandler}>
        Добавить устройство
      </Button>
      {Object.keys(requests).map((adress) => (
        <SlaveItem adress={+adress} key={adress} />
      ))}
    </VStack>
  );
});
