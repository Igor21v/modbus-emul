import { memo, useState } from 'react';
import cls from './ThemeSelect.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';

interface ThemeSelectProps {
  className?: string;
}

export const ThemeSelect = memo((props: ThemeSelectProps) => {
  const { className } = props;
  const [whiteTheme, setWhiteTheme] = useState(false);
  const buttonContent = whiteTheme ? 'Темная тема' : 'Светалая тема';
  const changeTheme = () => {
    setWhiteTheme((theme) => !theme);
  };

  return (
    <Button className={classNames(cls.ThemeSelect)} onClick={changeTheme}>
      {buttonContent}
    </Button>
  );
});
