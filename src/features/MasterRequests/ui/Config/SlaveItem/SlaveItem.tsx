import { setMasterProp } from 'features/MasterRequests/model/services/setProp';
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

interface SlaveItemProps {
  className?: string;
  slaveID: number;
}

export const SlaveItem = memo((props: SlaveItemProps) => {
  const { className, slaveID } = props;
  const dispatch = useAppDispatch();
  const requests = useAppSelector((state) => state.requests);
  const adressHandler = (adr: number) => {
    dispatch(setMasterProp({ changeAdr: { id: slaveID, adr } }));
  };
  const addRequestHandler = () => {
    dispatch(setMasterProp({ addRequest: slaveID }));
  };
  const delSlaveHandler = () => {
    dispatch(setMasterProp({ delSlave: slaveID }));
  };
  return (
    <VStack className={classNames(cls.SlaveItem, {}, [className])} gap="4" max>
      <HStack gap="32" max justify="start">
        <InputNum
          initVal={requests[slaveID].adr}
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

      {Object.entries(requests[slaveID].requests).map(([id, request]) => (
        <RequestItem slaveAdress={slaveID} id={+id} request={request} key={id} slaveId={slaveID} />
      ))}
    </VStack>
  );
});
