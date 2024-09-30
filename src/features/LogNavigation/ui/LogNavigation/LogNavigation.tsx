import { memo } from 'react';
import cls from './LogNavigation.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from 'shared/ui/Stack';

interface LogNavigationProps {
  className?: string;
}

export const LogNavigation = memo((props: LogNavigationProps) => {
  const { className } = props;
  const length = 3;
  const pages = Array.from(Array(length), (range, index) => {
    return index;
  });
  console.log(pages);

  return (
    <HStack className={classNames(cls.LogNavigation, {}, [className])}>
      sdf
    </HStack>
  );
});
