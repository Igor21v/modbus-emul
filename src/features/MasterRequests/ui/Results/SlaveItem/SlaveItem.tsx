import { memo } from 'react';
import cls from './SlaveItem.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Slave } from '../../../model/slice/requests';
import { VStack } from 'shared/ui/Stack';
import { RequestItem } from '../RequestItem/RequestItem';
import { Text } from 'shared/ui/Text';
import { Badge } from 'shared/ui/Badge';

interface SlaveItemProps {
  className?: string;
  slave: Slave;
  slaveId: number;
}

export const SlaveItem = memo((props: SlaveItemProps) => {
  const { className, slave, slaveId } = props;

  return (
    <>
      <Badge text={`${slave.adr}`} size="size_l" className={cls.adress} hint="Адрес Slave устройства" max align="center" />
      <VStack className={classNames(cls.SlaveItem, {}, [className])} gap="16">
        {Object.entries(slave.requests).map(([id, request]) => (
          <RequestItem request={request} key={id} requestId={+id} slaveId={slaveId} />
        ))}
      </VStack>
    </>
  );
});
