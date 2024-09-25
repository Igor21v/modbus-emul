import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import { LogbarExpandIcon } from './LogbarExpandIcon';
import Clear from 'shared/icons/Clear';
import { Icon } from 'shared/ui/Icon';
import cls from './Logbar.module.css';

interface LogbarProps {
  className?: string;
}

export const Logbar = memo((props: LogbarProps) => {
  const { className } = props;

  return (
    <HStack justify="between" className={cls.Logbar}>
      Панель настройки логов
      <HStack gap="16">
        <Icon Svg={Clear} />
        <LogbarExpandIcon />
        <button> sdfsd </button>
      </HStack>
    </HStack>
  );
});
