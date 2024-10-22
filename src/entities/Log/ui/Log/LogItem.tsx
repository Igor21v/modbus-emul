import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from 'shared/ui/Stack';
import { TextSpan, TextSpanTheme } from 'shared/ui/TextSpan';
import cls from './Log.module.css';
import { LogItemType } from 'entities/Log/model/types/logTypes';

interface LogItemProps {
  item: LogItemType;
}

export const LogItem = memo((props: LogItemProps) => {
  const { item } = props;
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
    <HStack max gap="32" className={classNames('', mods)}>
      <TextSpan text={String(item.num)} className={cls.number} />
      <TextSpan text={item.date} />
      {item.diffTime !== undefined && (
        <TextSpan text={'+' + item.diffTime} className={cls.diffTime} />
      )}
      <TextSpan text={item.msg} theme={theme} />
      {item.comment !== undefined && <TextSpan text={item.comment} italic />}
    </HStack>
  );
});
