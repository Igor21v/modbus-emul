import { memo } from 'react';
import cls from './Logbar.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Log } from 'entities/Log';
import { HStack } from 'shared/ui/Stack';
import { Icon } from 'shared/ui/Icon';
import Expand from 'shared/icons/Expand';
import Minimize from 'shared/icons/Minimize';

interface LogbarProps {
  className?: string;
}

export const Logbar = memo((props: LogbarProps) => {
  const { className } = props;

  return (
    <HStack>
      <Icon Svg={Expand} width={24} height={24} />
    </HStack>
  );
});
