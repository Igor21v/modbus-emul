import { memo } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { InputNum } from 'shared/ui/InputNum';
import { HStack, VStack } from 'shared/ui/Stack';
import { setResponse } from '../../../model/services/setResponse';
import { ResponseItem } from '../ResponseItem/ResponseItem';
import cls from './SlaveItem.module.css';

interface SlaveItemProps {
  className?: string;
  slaveID: number;
}

export const SlaveItem = memo((props: SlaveItemProps) => {
  const { className, slaveID } = props;
  const dispatch = useAppDispatch();
  const requests = useAppSelector((state) => state.responses);
  const adressHandler = (adr: number) => {
    dispatch(setResponse({ changeAdr: { id: slaveID, adr } }));
  };
  const addRequestHandler = () => {
    dispatch(setResponse({ addRegister: slaveID }));
  };
  const delSlaveHandler = () => {
    dispatch(setResponse({ delSlave: slaveID }));
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
          Добавить регистры
        </Button>
        <Button theme="outlineRed" onClick={delSlaveHandler} className={cls.delSlave}>
          Удалить устройство
        </Button>
      </HStack>
      <hr className={cls.line} />

      {Object.entries(requests[slaveID].requests).map(([id, request]) => (
        <ResponseItem slaveAdress={slaveID} id={+id} response={request} key={id} slaveId={slaveID} responseId={+id} />
      ))}
    </VStack>
  );
});
