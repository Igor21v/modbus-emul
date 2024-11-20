import { memo, useState } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { HStack, VStack } from 'shared/ui/Stack';
import { RequestItem } from '../RequestItem/RequestItem';
import cls from './SlaveItem.module.css';
import { requestsActions } from '../../model/slice/requests';
import { setMasterProp } from 'features/MasterRequests/model/services/setProp';

interface SlaveItemProps {
  className?: string;
  adress: number;
}

export const SlaveItem = memo((props: SlaveItemProps) => {
  const { className, adress } = props;
  const dispatch = useAppDispatch();
  const [currAdr, setCurrAdr] = useState(adress);
  const adressHandler = (val: number) => {
    if (val < 1) {
      setCurrAdr(1);
    } else if (val < 256) {
      setCurrAdr(val);
    }
  };
  const requests = useAppSelector((state) => state.requests);
  const addRequestHandler = () => {
    dispatch(setMasterProp({ type: 'addRequest', props: adress }));
  };
  const delSlaveHandler = () => {
    dispatch(setMasterProp({ type: 'delSlave', props: adress }));
  };
  return (
    <VStack className={classNames(cls.SlaveItem, {}, [className])} gap="4" max>
      <HStack gap="32" max justify="start">
        <Input value={currAdr} placeholder="Адрес устройства" type="number" id={`${adress}`} onChange={adressHandler} />
        {/* <Text text={`Устройство с адресом `} /> */}
        <Button theme="outlineGreen" onClick={addRequestHandler}>
          Добавить запрос
        </Button>
        <Button theme="outlineRed" onClick={delSlaveHandler} className={cls.delSlave}>
          Удалить устройство
        </Button>
      </HStack>
      <hr className={cls.line} />

      {Object.entries(requests[adress]).map(([id, request]) => (
        <RequestItem slaveAdress={adress} id={+id} request={request} key={id} />
      ))}
    </VStack>
  );
});
