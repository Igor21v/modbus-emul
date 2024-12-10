import { memo } from 'react';
import cls from './RequestItem.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Request } from '../../../model/slice/requests';
import { HStack } from 'shared/ui/Stack';

interface RequestItemProps {
  className?: string;
  request: Request;
}

export const RequestItem = memo((props: RequestItemProps) => {
  const { className, request } = props;

  return (
    <HStack className={classNames(cls.RequestItem, {}, [className])}>
      {'С регистра' + request.register + ' количество ' + request.quantity}
    </HStack>
  );
});
