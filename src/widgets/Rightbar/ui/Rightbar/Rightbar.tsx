import { memo } from 'react';
import { Card } from 'shared/ui/Card';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import cls from './Rightbar.module.css';
import { RateSelector } from 'features/RateSelector';

interface RightbarProps {
  className?: string;
}

export const Rightbar = memo((props: RightbarProps) => {
  const { className } = props;

  return (
    <VStack align="center" justify="center" className={cls.Rightbar}>
      <Card theme="outlined">
        <VStack align="center" justify="center" gap="20">
          <Text text="Настройки подключения" size="size_l" />
          <RateSelector />
        </VStack>
      </Card>
    </VStack>
  );
});
