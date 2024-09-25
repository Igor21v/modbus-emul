import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import { LogbarExpandIcon } from './LogbarExpandIcon';
import Clear from 'shared/icons/Clear';
import { Icon } from 'shared/ui/Icon';

interface LogbarProps {
  className?: string;
}

export const Logbar = memo((props: LogbarProps) => {
  const { className } = props;

  return (
    <HStack justify="between">
      Панель настройки логов
      <Icon Svg={Clear} />
      <LogbarExpandIcon />
    </HStack>
  );
});
