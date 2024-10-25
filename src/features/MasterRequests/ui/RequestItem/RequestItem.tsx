import { memo, useState } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { HStack } from 'shared/ui/Stack';
import { Request, requestsActions } from '../../model/slice/requests';
import { FCSelect } from './FCSelect/FCSelect';
import cls from './RequestItem.module.css';

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
  const regHandler = (val: number) => {
    if (val > 0) {
      setReg(val);
    }
  };
  const quantityHandler = (val: number) => {
    if (val > 0) {
      setQuantity(val);
    }
  };

  const delReqHandler = () => {
    dispatch(requestsActions.delRequest({ adress: slaveAdress, reqID: id }));
  };
  const [fCode, setFCode] = useState('1');
  const fCodeHandler = (val: string) => {
    setFCode(val);
  };

  return (
    <HStack className={classNames(cls.RequestItem, {}, [className])} gap="4">
      <FCSelect fCode={fCode} onChange={fCodeHandler} />
      <Input
        placeholder="Начальный регистр/бит"
        value={reg}
        id={`r${id}`}
        title="Регистры начинаются с 1"
        type="number"
        onChange={regHandler}
      />
      <Input placeholder="Количество" value={quantity} onChange={quantityHandler} id={`q${id}`} type="number" />
      <Button theme="outlineRed" onClick={delReqHandler} className={cls.addReq} size="size_s">
        Удалить запрос
      </Button>
    </HStack>
  );
});
