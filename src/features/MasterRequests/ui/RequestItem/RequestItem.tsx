import { memo } from 'react';
import cls from './RequestItem.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Request, requestsActions } from '../../model/slice/masterReqSlice';
import { Input } from 'shared/ui/Input';
import { HStack } from 'shared/ui/Stack';
import { Button } from 'shared/ui/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';

interface RequestItemProps {
  className?: string;
  request: Request;
  id: number;
  slaveAdress: number;
}

export const RequestItem = memo((props: RequestItemProps) => {
  const { className, request, id, slaveAdress } = props;
  const dispatch = useAppDispatch();
  const delReqHandler = () => {
    dispatch(requestsActions.delRequest({ adress: slaveAdress, reqID: id }));
  };

  return (
    <HStack className={classNames(cls.RequestItem, {}, [className])} gap="4">
      <Input placeholder="Начальный регистр/бит" value={request.register} />
      <Input placeholder="Количество" value={request.quantity} />
      <Button theme="outlineRed" onClick={delReqHandler} className={cls.addReq} size="size_s">
        Удалить запрос
      </Button>
    </HStack>
  );
});
