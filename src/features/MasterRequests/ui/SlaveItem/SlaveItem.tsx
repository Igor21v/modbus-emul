import { memo } from 'react';
import cls from './SlaveItem.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { HStack, VStack } from 'shared/ui/Stack';
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
  };
  return (
    <VStack className={classNames(cls.SlaveItem, {}, [className])}>
      <HStack gap="32">
        <Text text={`Устройство с адресом ${adress}`} />
        <Button
          theme="outlineGreen"
          onClick={addRequestHandler}
          className={cls.addReq}
          size="size_s"
        >
          Добавить запрос для этого устройства
        </Button>
        <Button
          theme="outlineRed"
          onClick={addRequestHandler}
          className={cls.addReq}
          size="size_s"
        >
          Удалить устройство
        </Button>
      </HStack>

      {Object.entries(requests[adress]).map(([id, request]) => (
        <RequestItem id={+id} request={request} key={id} />
      ))}
    </VStack>
  );
});
