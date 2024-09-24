import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import { LogbarExpandIcon } from './LogbarExpandIcon';

interface LogbarProps {
  className?: string;
}

export const Logbar = memo((props: LogbarProps) => {
  const { className } = props;

  return (
    <HStack justify="between">
      Панель настройки логов
      <LogbarExpandIcon />
    </HStack>
  );
});
