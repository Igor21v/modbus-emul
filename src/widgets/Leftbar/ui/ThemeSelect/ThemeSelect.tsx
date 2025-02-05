import { memo } from 'react';
import cls from './ThemeSelect.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';

interface ThemeSelectProps {
  className?: string;
}

export const ThemeSelect = memo((props: ThemeSelectProps) => {
  const { className } = props;

  return <Button className={classNames(cls.ThemeSelect)}>Где-то здесь будет иконка смены темы</Button>;
});
