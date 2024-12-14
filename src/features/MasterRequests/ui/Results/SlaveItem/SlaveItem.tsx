import { memo } from 'react';
import cls from './SlaveItem.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Slave } from '../../../model/slice/requests';
import { VStack } from 'shared/ui/Stack';
import { RequestItem } from '../RequestItem/RequestItem';
import { Text } from 'shared/ui/Text';

interface SlaveItemProps {
  className?: string;
  slave: Slave;
}

export const SlaveItem = memo((props: SlaveItemProps) => {
  const { className, slave } = props;

  return (
    <>
      <Text text={`${slave.adr}`} badge size="size_l" className={cls.adress} hint="Адрес Slave устройства" />
      <VStack className={classNames(cls.SlaveItem, {}, [className])} max gap="4">
        {Object.entries(slave.requests).map(([id, request]) => (
          <RequestItem request={request} key={id} />
        ))}
      </VStack>
    </>
  );
});
