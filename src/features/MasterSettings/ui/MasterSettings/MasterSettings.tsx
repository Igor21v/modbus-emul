import { memo, useState } from 'react';
import cls from './MasterSettings.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { Card } from 'shared/ui/Card';
import { TextSpan } from 'shared/ui/TextSpan';
import { Input } from 'shared/ui/Input';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { setSettings } from '../../model/services/setSettings';

interface MasterSettingsProps {
  className?: string;
}

export const MasterSettings = memo((props: MasterSettingsProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { frameDelay, timeout } = useAppSelector((state) => state.masterSettings);
  const timeoutHandler = (val: number) => {
    dispatch(setSettings({ timeout: val }));
  };
  const frameHandler = (val: number) => {
    dispatch(setSettings({ delay: val }));
  };

  return (
    <Card className={classNames(cls.MasterSettings, {}, [className])} theme="outlined">
      <Text title="Настройки режима мастер" align="center" className={cls.title} />
      <VStack gap="16" wrap justify="center">
        <Input placeholder="Таймаут ответа, мс" value={timeout} onChange={timeoutHandler} type="number" />
        <Input
          title="Задержка после получения ответа от слейва и следующим запросом"
          placeholder="Время между фреймами, мс"
          value={frameDelay}
          onChange={frameHandler}
          type="number"
        />
      </VStack>
    </Card>
  );
});
