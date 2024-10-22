import { memo } from 'react';
import cls from './RequestItem.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Request } from 'features/MasterRequests/model/slice/masterReqSlice';

interface RequestItemProps {
  className?: string;
  request: Request;
  id: number;
}

export const RequestItem = memo((props: RequestItemProps) => {
  const { className, request, id } = props;

  return (
    <div className={classNames(cls.RequestItem, {}, [className])}>
      Запрос регистра {request.register} Количество {request.quantity}
    </div>
  );
});
