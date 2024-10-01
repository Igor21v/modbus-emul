import {
  LogItem,
  limitPage,
  limitLog,
} from 'entities/Log/model/slice/logSlice';
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
  const { log, logCounter, activePage } = useAppSelector((state) => state.log);
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

  // Рендерим логи против часовой стрелки кольцевого буфера index1 - индексы по часовой стрелке, index2 - против часовой
  const LogRendered = [];
  // Индекс начала круга буфера
  const startIndexBuffer = logCounter % limitLog;
  // Количестово сообщений которых нужно пропустить
  const missLogs = (activePage - 1) * limitPage;
  // Индекс с учетом страницы
  const startIndex1 = startIndexBuffer - missLogs;
  const maxEl = limitLog - 1;

  let endIndex1 = startIndex1 + 1 - limitPage;
  if (endIndex1 < 0) {
    endIndex1 = 0;
  }

  let startIndex2 = maxEl - (missLogs - startIndex1);
  if (startIndex2 > maxEl) {
    startIndex2 = maxEl;
  }

  let endIndex2 = startIndex2 - limitPage + startIndex1;
  if (endIndex2 < startIndex1) {
    endIndex2 = startIndex1;
  }

  /*   console.log('------------' + logCounter);
  console.log('startIndex1  ' + startIndex1);
  console.log('endIndex1  ' + endIndex1);
  console.log('startIndex2  ' + startIndex2);
  console.log('endIndex2  ' + endIndex2); */

  for (let i = startIndex1; i >= endIndex1; i--) {
    LogRendered.push(LogItem(log[i]));
  }

  if (logCounter >= limitLog) {
    for (let i = startIndex2; i > endIndex2; i--) {
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
