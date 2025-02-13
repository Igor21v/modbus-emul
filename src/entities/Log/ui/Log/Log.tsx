import { limitLogs, logCounter, logOnPage } from 'entities/Log/model/slice/logSlice';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { VStack } from 'shared/ui/Stack';
import cls from './Log.module.css';
import { LogItem } from './LogItem';

interface LogProps {
  className?: string;
}

export const Log = memo((props: LogProps) => {
  const { className } = props;
  const { log, activePage } = useAppSelector((state) => state.log);

  // Рендерим логи в обратном порядкекольцевого буфера. index1 - индексы с буфера по часовой стрелке, index2 - против часовой
  const LogRendered = [];
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
    LogRendered.push(<LogItem item={log[i]} key={log[i].num} />);
  }

  // Добавляем при необходимости конец кольцеого буфера
  if (logCounter >= limitLogs) {
    let startIndex2 = maxEl;
    let endIndex2 = startIndex2 - logOnPage + startIndex1 + 1;
    if (endIndex2 < startIndex1) {
      endIndex2 = startIndex1;
    }

    for (let i = startIndex2; i > endIndex2; i--) {
      LogRendered.push(<LogItem item={log[i]} key={log[i].num} />);
    }
    /* console.log('------------' + logCounter);
    console.log('missLogs  ' + missLogs);
    console.log('startIndex1  ' + startIndex1);
    console.log('endIndex1  ' + endIndex1);
    console.log('startIndex2  ' + startIndex2);
    console.log('endIndex2  ' + endIndex2); */
  }

  return <VStack className={classNames(cls.Log, {}, [className])}>{LogRendered}</VStack>;
});
