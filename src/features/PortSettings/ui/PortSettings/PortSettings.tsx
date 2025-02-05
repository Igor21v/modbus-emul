import { addLog } from 'entities/Log/model/services/addLog';
import { memo } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Button } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { BitInByteSelector } from '../DataBitSelector/DataBitSelector';
import { OpenPortButton } from '../OpenPortButton/OpenPortButton';
import { ParitySelector } from '../ParitySelector/ParitySelector';
import { RateSelector } from '../RateSelector/RateSelector';
import { StopBitSelector } from '../StopBitSelector/StopBitSelector';

interface PortSettingsProps {
  className?: string;
}

export const PortSettings = memo((props: PortSettingsProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  return (
    <Card max>
      <VStack align="center" justify="center" gap="20">
        <Text text="Настройки подключения" size="size_l" />
        <RateSelector />
        <ParitySelector />
        <StopBitSelector />
        <BitInByteSelector />
        <OpenPortButton />
        <Button onClick={() => dispatch(addLog({ msg: 'Тестовый лог', priority: 9 }))}>Add test log</Button>
        <Button onClick={() => document.body.requestFullscreen()}>Full screen</Button>
      </VStack>
    </Card>
  );
});
