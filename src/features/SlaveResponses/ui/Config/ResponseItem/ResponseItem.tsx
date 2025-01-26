import { setRequest } from 'features/MasterRequests/model/services/setRequest';
import { memo } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { InputNum } from 'shared/ui/InputNum';
import { HStack } from 'shared/ui/Stack';
import { Request } from '../../../model/slice/responses';
import { FCSelect } from './FCSelect/FCSelect';
import cls from './ResponseItem.module.css';

interface ResponseItemProps {
  className?: string;
  request: Request;
  id: number;
  requestId: number;
  slaveAdress: number;
  slaveId: number;
}

export const ResponseItem = memo((props: ResponseItemProps) => {
  const { className, request, id, slaveAdress, slaveId, requestId } = props;
  const dispatch = useAppDispatch();
  const regHandler = (val: number) => {
    dispatch(setRequest({ changeRegister: { register: val, requestId: id, slaveId: slaveId } }));
  };
  const quantityHandler = (val: number) => {
    dispatch(setRequest({ changeQuantity: { quantity: val, requestId: id, slaveId: slaveId } }));
  };

  const delReqHandler = () => {
    dispatch(setRequest({ delRequest: { adress: slaveAdress, reqID: id } }));
  };
  const fCodeHandler = (val: string) => {
    dispatch(setRequest({ setFunc: { slaveId, requestId, func: +val } }));
  };

  return (
    <HStack className={classNames(cls.ResponseItem, {}, [className])} gap="4">
      <FCSelect fCode={`${request.func}`} onChange={fCodeHandler} />
      <InputNum
        placeholder="Начальный регистр/бит"
        initVal={request.register}
        id={`r${id}`}
        title="Регистры начинаются с 0"
        onChange={regHandler}
        max={65535}
        min={0}
      />
      <InputNum placeholder="Количество" initVal={request.quantity} onChange={quantityHandler} id={`q${id}`} min={1} max={126} />
      <Button theme="outlineRed" onClick={delReqHandler} className={cls.addReq} size="size_s">
        Удалить запрос
      </Button>
    </HStack>
  );
});
