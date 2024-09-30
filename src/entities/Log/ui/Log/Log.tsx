import { LogItem, maxLengthLog } from 'entities/Log/model/slice/logSlice';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { HStack, VStack } from 'shared/ui/Stack';
import { TextSpan, TextSpanTheme } from 'shared/ui/TextSpan';
import cls from './Log.module.css';

interface LogProps {
  className?: string;
}

export const Log = memo((props: LogProps) => {
  const { className } = props;
  const { log, logCounter } = useAppSelector((state) => state.log);
  const copyLog = log.slice();
  copyLog.reverse();

  const LogItem = (item: LogItem) => {
    let theme: TextSpanTheme = 'primary';
    if (item.priority === 1) {
      theme = 'error';
    } else if (item.priority === 9) {
      theme = 'success';
    }
    return (
      <HStack key={item.num} max gap="32" className={cls.string}>
        <TextSpan text={String(item.num)} className={cls.number} />
        <TextSpan text={item.date} />
        {item.diffTime && (
          <TextSpan text={'+' + item.diffTime} className={cls.diffTime} />
        )}
        <TextSpan text={item.msg} theme={theme} />
      </HStack>
    );
  };

  const LogRendered = [];

  // Рендерим логи против часовой стрелки кольцевого буфера
  // Индекс начала круга бувера
  let startIndex = logCounter % maxLengthLog;
  for (let i = startIndex; i >= 0; i--) {
    LogRendered.push(LogItem(log[i]));
  }
  if (logCounter >= maxLengthLog) {
    for (let i = maxLengthLog - 1; i > startIndex; i--) {
      LogRendered.push(LogItem(log[i]));
    }
  }

  return (
    <VStack className={classNames(cls.PortListen, {}, [className])}>
      {/* copyLog.map((item) => LogItem(item)) */}
      {LogRendered}
    </VStack>
  );
});
