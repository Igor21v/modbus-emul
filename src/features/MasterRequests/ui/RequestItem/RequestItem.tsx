import { memo, useState } from 'react';
import cls from './RequestItem.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Request, requestsActions } from '../../model/slice/requests';
import { Input } from 'shared/ui/Input';
import { HStack } from 'shared/ui/Stack';
import { Button } from 'shared/ui/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Select, SelectOption } from 'shared/ui/Select';

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

  const options: SelectOption<string>[] = [
    {
      value: '1',
      content: '1: Чтение DO',
    },
    {
      value: '2',
      content: '2: Чтение DI',
    },
    {
      value: '3',
      content: '3: Чтение AO',
    },
    {
      value: '4',
      content: '4: Чтение AI',
    },
  ];
  const [fCode, setFCode] = useState('1');

  return (
    <HStack className={classNames(cls.RequestItem, {}, [className])} gap="4">
      <Select className={cls.RateSelector} options={options} value={fCode} onChange={(value) => setFCode(value)} column />
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
