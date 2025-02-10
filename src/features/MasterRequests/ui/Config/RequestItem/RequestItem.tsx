import { setRequest } from 'features/MasterRequests/model/services/setRequest';
import { memo } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { InputNum } from 'shared/ui/InputNum';
import { HStack } from 'shared/ui/Stack';
import { Request } from '../../../model/slice/requests';
import { FCSelect } from './FCSelect/FCSelect';
import cls from './RequestItem.module.css';

interface RequestItemProps {
  className?: string;
  request: Request;
  requestId: number;
  slaveAdress: number;
  slaveId: number;
}

export const RequestItem = memo((props: RequestItemProps) => {
  const { className, request, slaveAdress, slaveId, requestId } = props;
  const dispatch = useAppDispatch();
  const regHandler = (val: number) => {
    dispatch(setRequest({ type: 'changeRegister', requestId, slaveId, val }));
  };
  const quantityHandler = (val: number) => {
    dispatch(setRequest({ type: 'changeQuantity', requestId, slaveId, val }));
  };

  const delReqHandler = () => {
    dispatch(setRequest({ type: 'delRequest', slaveAdress, requestId }));
  };
  const fCodeHandler = (val: string) => {
    dispatch(setRequest({ type: 'setFunc', func: +val, requestId, slaveId }));
  };

  return (
    <HStack className={classNames(cls.RequestItem, {}, [className])} gap="4">
      <FCSelect fCode={`${request.func}`} onChange={fCodeHandler} />
      <InputNum
        placeholder="Начальный регистр/бит"
        initVal={request.register}
        id={`r${requestId}`}
        title="Регистры начинаются с 0"
        onChange={regHandler}
        max={65535}
        min={0}
      />
      <InputNum
        placeholder="Количество"
        initVal={request.quantity}
        onChange={quantityHandler}
        id={`q${requestId}`}
        min={1}
        max={126}
      />
      <Button theme="outlineRed" onClick={delReqHandler} className={cls.addReq} size="size_s">
        Удалить запрос
      </Button>
    </HStack>
  );
});
