import {
  LogItem,
  logOnPage,
  limitLogs,
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
    const mods = {
      [cls.evenLog]: item.num % 2 === 0,
    };
    return (
      <HStack key={item.num} max gap="32" className={classNames('', mods)}>
        <TextSpan text={String(item.num)} className={cls.number} />
        <TextSpan text={item.date} />
        {item.diffTime && (
          <TextSpan text={'+' + item.diffTime} className={cls.diffTime} />
        )}
        <TextSpan text={item.msg} theme={theme} />
      </HStack>
    );
  };

  // Рендерим логи в обратном порядкекольцевого буфера. index1 - индексы с буфера по часовой стрелке, index2 - против часовой
  const LogRendered = [];
  // Индекс начала круга буфера
  const startIndexBuffer = logCounter % limitLogs;
  // Количестово сообщений которых нужно пропустить
  const missLogs = (activePage - 1) * logOnPage;
  // Индекс с учетом страницы
  const startIndex1 = (logCounter - missLogs) % limitLogs;
  const maxEl = limitLogs - 1;

  let endIndex1 = startIndex1 + 1 - logOnPage;
  if (endIndex1 < 0) {
    endIndex1 = 0;
  }

  for (let i = startIndex1; i >= endIndex1; i--) {
    LogRendered.push(LogItem(log[i]));
  }

  // Добавляем при необходимости конец кольцеого буфера
  if (logCounter >= limitLogs) {
    let startIndex2 = maxEl;
    let endIndex2 = startIndex2 - logOnPage + startIndex1 + 1;
    if (endIndex2 < startIndex1) {
      endIndex2 = startIndex1;
    }

    for (let i = startIndex2; i > endIndex2; i--) {
      LogRendered.push(LogItem(log[i]));
    }
    /* console.log('------------' + logCounter);
    console.log('missLogs  ' + missLogs);
    console.log('startIndex1  ' + startIndex1);
    console.log('endIndex1  ' + endIndex1);
    console.log('startIndex2  ' + startIndex2);
    console.log('endIndex2  ' + endIndex2); */
  }

  return (
    <VStack className={classNames(cls.PortListen, {}, [className])}>
      {LogRendered}
    </VStack>
  );
});
