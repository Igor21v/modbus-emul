import { memo } from 'react';
import cls from './AppState.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';

export const AppState = memo(() => {
  const { content, error } = useAppSelector((state) => state.appState);
  const theme: TextTheme = error ? 'error' : 'success';
  console.log();
  return (
    <Text
      title={content}
      align="center"
      italic
      theme={theme}
      size="size_l"
      className={classNames(cls.AppState)}
    />
  );
});
