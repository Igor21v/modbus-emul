import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { HStack, VStack } from 'shared/ui/Stack';
import { TextSpan } from 'shared/ui/TextSpan';
import cls from './Log.module.css';

interface LogProps {
  className?: string;
}

export const Log = memo((props: LogProps) => {
  const { className } = props;
  const log = useAppSelector((state) => state.log);

  return (
    <VStack className={classNames(cls.PortListen, {}, [className])}>
      {log.map((item, index) => (
        <HStack key={index} max gap="32" className={cls.string}>
          <TextSpan text={String(index)} className={cls.number} />
          <TextSpan text={item.date} />
          <TextSpan text={item.msg} />
        </HStack>
      ))}
    </VStack>
  );
});