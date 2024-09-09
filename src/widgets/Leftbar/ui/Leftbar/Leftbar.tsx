import { memo } from 'react';
import cls from './Leftbar.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { VStack } from 'shared/ui/Stack';

interface LeftbarProps {
  className?: string;
}

export const Leftbar = memo((props: LeftbarProps) => {
  const { className } = props;

  return (
    <VStack gap="16" justify="center" align="center" className={cls.Leftbar}>
      <Button>Режим Мастер</Button>
      <Button>Режим Слейв</Button>
      <Button>Режим прослушки порта</Button>
    </VStack>
  );
});
