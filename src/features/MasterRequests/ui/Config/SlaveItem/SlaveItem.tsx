import { setRequest } from 'features/MasterRequests/model/services/setRequest';
import { memo } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { HStack, VStack } from 'shared/ui/Stack';
import { RequestItem } from '../RequestItem/RequestItem';
import cls from './SlaveItem.module.css';
import { InputNum } from 'shared/ui/InputNum';
import { Slave } from '../../../model/slice/requests';

interface SlaveItemProps {
  className?: string;
  slaveID: number;
  slave: Slave;
}

export const SlaveItem = memo((props: SlaveItemProps) => {
  const { className, slaveID, slave } = props;
  const dispatch = useAppDispatch();
  const adressHandler = (adr: number) => {
    dispatch(setRequest({ type: 'changeAdr', adr, slaveID }));
  };
  const addRequestHandler = () => {
    dispatch(setRequest({ type: 'addRequest', slaveID }));
  };
  const delSlaveHandler = () => {
    dispatch(setRequest({ type: 'delSlave', slaveID }));
  };
  return (
    <VStack className={classNames(cls.SlaveItem, {}, [className])} gap="4" max>
      <HStack gap="32" max justify="start">
        <InputNum
          initVal={slave.adr}
          placeholder="Адрес устройства"
          id={`${slaveID}`}
          onChange={adressHandler}
          min={1}
          max={255}
        />
        <Button theme="outlineGreen" onClick={addRequestHandler}>
          Добавить запрос
        </Button>
        <Button theme="outlineRed" onClick={delSlaveHandler} className={cls.delSlave}>
          Удалить устройство
        </Button>
      </HStack>
      <hr className={cls.line} />

      {Object.entries(slave.requests).map(([id, request]) => (
        <RequestItem slaveAdress={slaveID} request={request} key={id} slaveId={slaveID} requestId={+id} />
      ))}
    </VStack>
  );
});
