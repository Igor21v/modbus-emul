import { memo } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card';
import { InputNum } from 'shared/ui/InputNum';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { setSettings } from '../../model/services/setSettings';
import cls from './MasterSettings.module.css';

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
        <InputNum placeholder="Таймаут ответа, мс" initVal={timeout} onChange={timeoutHandler} min={1} max={20000} />
        <InputNum
          title="Задержка после получения ответа от слейва и следующим запросом, 0-2000"
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
