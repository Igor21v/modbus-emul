import { memo, useState } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card';
import { InputNum } from 'shared/ui/InputNum';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { setSettings } from '../../model/services/setSettings';
import cls from './SlaveSettings.module.css';
import { Toggle } from 'shared/ui/Toggle/Toggle';
import { TextSpan } from 'shared/ui/TextSpan';

interface SlaveSettingsProps {
  className?: string;
}

export const SlaveSettings = memo((props: SlaveSettingsProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { frameDelay, sendError } = useAppSelector((state) => state.slaveSettings);
  const toggleHandler = () => {
    dispatch(setSettings({ sendError: !sendError }));
  };
  const frameHandler = (val: number) => {
    dispatch(setSettings({ delay: val }));
  };

  return (
    <Card className={classNames(cls.SlaveSettings, {}, [className])} theme="outlined" max>
      <Text title="Настройки режима слейв" align="center" className={cls.title} />
      <VStack gap="16" wrap justify="center">
        <HStack gap="16" title="Отправлять ответ с кодом ошибки если запрошены не сконфигурированные адреса">
          <TextSpan text="Отвечать ошибкой " />
          <Toggle onChange={toggleHandler} checked={sendError} />
        </HStack>
        <InputNum
          title="Задержка после получения запроса от от мастера и отправкой ответа, 0-2000"
          placeholder="Время между фреймами, мс"
          initVal={frameDelay}
          onChange={frameHandler}
          min={0}
          max={2000}
        />
      </VStack>
    </Card>
  );
});
