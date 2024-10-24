import { memo } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { HStack, VStack } from 'shared/ui/Stack';
import { requestsActions } from '../../model/slice/masterReqSlice';
import { RequestItem } from '../RequestItem/RequestItem';
import cls from './SlaveItem.module.css';

interface SlaveItemProps {
  className?: string;
  adress: number;
}

export const SlaveItem = memo((props: SlaveItemProps) => {
  const { className, adress } = props;
  const dispatch = useAppDispatch();
  const requests = useAppSelector((state) => state.requests);
  const addRequestHandler = () => {
    dispatch(requestsActions.addRequest(adress));
  };
  return (
    <VStack className={classNames(cls.SlaveItem, {}, [className])} gap="4">
      <HStack gap="32">
        <Input value={adress} placeholder="Адрес устройства" type="number" id={`${adress}`} />
        {/* <Text text={`Устройство с адресом `} /> */}
        <Button theme="outlineGreen" onClick={addRequestHandler} className={cls.addReq}>
          Добавить запрос
        </Button>
        <Button theme="outlineRed" onClick={addRequestHandler} className={cls.addReq}>
          Удалить устройство
        </Button>
      </HStack>

      {Object.entries(requests[adress]).map(([id, request]) => (
        <RequestItem slaveAdress={adress} id={+id} request={request} key={id} />
      ))}
    </VStack>
  );
});
