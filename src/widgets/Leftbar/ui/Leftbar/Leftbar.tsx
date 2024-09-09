import { memo } from 'react';
import cls from './Leftbar.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { VStack } from 'shared/ui/Stack';
import { AppLink } from 'shared/ui/AppLink';
import { routerMap } from 'shared/const/router';
import { Text } from 'shared/ui/Text';

interface LeftbarProps {
  className?: string;
}

export const Leftbar = memo((props: LeftbarProps) => {
  const { className } = props;

  return (
    <VStack align="center" justify="center" gap="20" className={cls.Leftbar}>
      <AppLink to={routerMap.listen}>
        <Text text="Режим Мастер" />
      </AppLink>
      <AppLink to={routerMap.listen}>Режим Слейв</AppLink>
      <AppLink to={routerMap.listen}>Прослушка порта</AppLink>
    </VStack>
  );
});
