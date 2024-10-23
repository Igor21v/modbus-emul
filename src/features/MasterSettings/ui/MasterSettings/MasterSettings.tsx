import { memo, useState } from 'react';
import cls from './MasterSettings.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { Card } from 'shared/ui/Card';
import { TextSpan } from 'shared/ui/TextSpan';
import { Input } from 'shared/ui/Input';

interface MasterSettingsProps {
  className?: string;
}

export const MasterSettings = memo((props: MasterSettingsProps) => {
  const { className } = props;
  const [timeout, setTimeout] = useState(0);

  return (
    <Card
      className={classNames(cls.MasterSettings, {}, [className])}
      theme="outlined"
    >
      <Text
        title="Настройки режима мастер"
        align="center"
        className={cls.title}
      />
      <HStack gap="16" wrap justify="center">
        <Input
          placeholder="Таймаут ответа"
          value={timeout}
          onChange={setTimeout}
        />
      </HStack>
    </Card>
  );
});
