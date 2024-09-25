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
  const copyLog = [...log];
  copyLog.reverse();

  return (
    <VStack className={classNames(cls.PortListen, {}, [className])}>
      {copyLog.map((item) => (
        <HStack key={item.num} max gap="32" className={cls.string}>
          <TextSpan text={String(item.num)} className={cls.number} />
          <TextSpan text={item.date} />
          <TextSpan text={'+' + item.diffTime} className={cls.diffTime} />
          <TextSpan text={item.msg} />
        </HStack>
      ))}
    </VStack>
  );
});
