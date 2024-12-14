import { setMasterProp } from 'features/MasterRequests/model/services/setProp';
import { memo, useState } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { HStack } from 'shared/ui/Stack';
import { Request } from '../../../model/slice/requests';
import { FCSelect } from './FCSelect/FCSelect';
import cls from './RequestItem.module.css';
import { InputNum } from 'shared/ui/InputNum';

interface RequestItemProps {
  className?: string;
  request: Request;
  id: number;
  slaveAdress: number;
  slaveId: number;
}

export const RequestItem = memo((props: RequestItemProps) => {
  const { className, request, id, slaveAdress, slaveId } = props;
  const dispatch = useAppDispatch();
  const [reg, setReg] = useState(`${request.register}`);
  const regHandler = (val: string) => {
    const valNum = Number(val);
    let recVal = `${val}`;
    if (valNum < -1) {
      recVal = '-1';
    } else if (valNum > 65535) {
      recVal = '65535';
    }
    setReg(recVal);
  };
  const quantityHandler = (val: number) => {
    dispatch(setMasterProp({ changeQuantity: { quantity: val, requestId: id, slaveId: slaveId } }));
  };

  const delReqHandler = () => {
    dispatch(setMasterProp({ delRequest: { adress: slaveAdress, reqID: id } }));
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
        title="Регистры начинаются с 0"
        type="number"
        onChange={regHandler}
      />
      <InputNum
        placeholder="Количество"
        initVal={request.quantity}
        onChange={quantityHandler}
        id={`q${id}`}
        type="number"
        max={126}
        min={0}
      />
      <Button theme="outlineRed" onClick={delReqHandler} className={cls.addReq} size="size_s">
        Удалить запрос
      </Button>
    </HStack>
  );
});
