import { memo } from 'react';
import cls from './RequestItem.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Request } from '../../../model/slice/requests';
import { HStack } from 'shared/ui/Stack';
import { TextSpan } from 'shared/ui/TextSpan';
import { Icon } from 'shared/ui/Icon';
import Arrows from 'shared/icons/Arrows';

interface RequestItemProps {
  className?: string;
  request: Request;
}

export const RequestItem = memo((props: RequestItemProps) => {
  const { className, request } = props;

  return (
    <HStack className={classNames(cls.RequestItem, {}, [className])} gap="4" wrap max>
      <Icon Svg={Arrows} hint="Белый - порт не открыт, зеленый - есть связь, красный - нет связи" />
      {request.content.map((item, index) => (
        <HStack key={index} gap="4">
          <TextSpan text={`${request.register + index}:`} italic />
          <TextSpan text={item} />
        </HStack>
      ))}
    </HStack>
  );
});
