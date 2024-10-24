import { memo, useState } from 'react';
import cls from './RequestItem.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Request, requestsActions } from '../../model/slice/requests';
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
  const [reg, setReg] = useState(request.register);
  const [quantity, setQuantity] = useState(request.quantity);

  const delReqHandler = () => {
    dispatch(requestsActions.delRequest({ adress: slaveAdress, reqID: id }));
  };

  return (
    <HStack className={classNames(cls.RequestItem, {}, [className])} gap="4">
      <Input
        placeholder="Начальный регистр/бит"
        value={reg}
        id={`r${id}`}
        title="Регистры начинаются с 1"
        min={1}
        type="number"
        onChange={setReg}
      />
      <Input placeholder="Количество" value={quantity} onChange={setQuantity} id={`q${id}`} />
      <Button theme="outlineRed" onClick={delReqHandler} className={cls.addReq} size="size_s">
        Удалить запрос
      </Button>
    </HStack>
  );
});
