import { memo } from 'react';
import { Card } from 'shared/ui/Card';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import cls from './Rightbar.module.css';

interface RightbarProps {
  className?: string;
}

export const Rightbar = memo((props: RightbarProps) => {
  const { className } = props;

  return (
    <VStack align="center" justify="center" className={cls.Rightbar}>
      <Card theme="outlined">
        <VStack align="center" justify="center" gap="20">
          <Text text="Настройки подключения" />
        </VStack>
      </Card>
    </VStack>
  );
});
