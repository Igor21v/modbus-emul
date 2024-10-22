import { memo } from 'react';
import cls from './SlaveItem.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { addRequest } from 'features/MasterRequests/model/services/masterReq';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { RequestItem } from '../RequestItem/RequestItem';

interface SlaveItemProps {
  className?: string;
  adress: number;
}

export const SlaveItem = memo((props: SlaveItemProps) => {
  const { className, adress } = props;
  const dispatch = useAppDispatch();
  const requests = useAppSelector((state) => state.requests);
  const addRequestHandler = () => {
    dispatch(addRequest(adress));
    console.log(requests);
  };
  return (
    <VStack className={classNames(cls.SlaveItem, {}, [className])}>
      <Text text={`Устройство ${adress}`} />
      {Object.entries(requests[adress]).map(([id, request]) => (
        <RequestItem id={+id} request={request} key={id} />
      ))}
      <Button
        theme="outlineGreen"
        onClick={addRequestHandler}
        className={cls.addReq}
      >
        Добавить запрос
      </Button>
    </VStack>
  );
});
