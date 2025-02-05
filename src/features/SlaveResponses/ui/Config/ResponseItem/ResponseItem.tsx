import { memo } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { InputNum } from 'shared/ui/InputNum';
import { HStack } from 'shared/ui/Stack';
import { setResponse } from '../../../model/services/setResponse';
import { Response } from '../../../model/slice/responses';
import { AreaSelect } from './AreaSelect/AreaSelect';
import cls from './ResponseItem.module.css';

interface ResponseItemProps {
  className?: string;
  response: Response;
  id: number;
  responseId: number;
  slaveAdress: number;
  slaveId: number;
}

export const ResponseItem = memo((props: ResponseItemProps) => {
  const { className, response, id, slaveAdress, slaveId, responseId } = props;
  const dispatch = useAppDispatch();
  const regHandler = (val: number) => {
    dispatch(setResponse({ changeRegister: { register: val, responseId: id, slaveId: slaveId } }));
  };
  const quantityHandler = (val: number) => {
    dispatch(setResponse({ changeQuantity: { quantity: val, responseId: id, slaveId: slaveId } }));
  };

  const delReqHandler = () => {
    dispatch(setResponse({ delRegister: { adress: slaveAdress, reqID: id } }));
  };
  const areaHandler = (val: string) => {
    dispatch(setResponse({ setArea: { slaveId, responseId, area: +val } }));
  };

  return (
    <HStack className={classNames(cls.ResponseItem, {}, [className])} gap="4">
      <AreaSelect area={`${response.aria}`} onChange={areaHandler} />
      <InputNum
        placeholder="Начальный регистр/бит"
        initVal={response.register}
        id={`r${id}`}
        title="Регистры начинаются с 0"
        onChange={regHandler}
        max={65535}
        min={0}
      />
      <InputNum placeholder="Количество" initVal={response.quantity} onChange={quantityHandler} id={`q${id}`} min={1} max={126} />
      <Button theme="outlineRed" onClick={delReqHandler} className={cls.addReq} size="size_s">
        Удалить область
      </Button>
    </HStack>
  );
});
