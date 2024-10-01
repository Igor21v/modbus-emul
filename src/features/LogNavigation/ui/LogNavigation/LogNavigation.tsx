import { logOnPage, logActions, limitPages } from 'entities/Log/';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { Button } from 'shared/ui/Button';
import { HStack } from 'shared/ui/Stack';
import { TextSpan } from 'shared/ui/TextSpan';
import cls from './LogNavigation.module.css';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface LogNavigationProps {
  className?: string;
}

export const LogNavigation = memo((props: LogNavigationProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { activePage, logCounter } = useAppSelector((state) => state.log);
  const amountPages = Math.min(
    Math.ceil((logCounter + 1) / logOnPage),
    limitPages,
  );
  const pages = Array.from(Array(amountPages), (_, index) => {
    return index + 1;
  });

  const ItemPage = (item: number) => {
    const mods = {
      [cls.active]: item === activePage,
    };
    return (
      <Button
        theme="clear"
        key={item}
        className={classNames(cls.button, mods)}
        onClick={() => dispatch(logActions.setActivePage(item))}
      >
        {item}
      </Button>
    );
  };

  if (amountPages > 1) {
    return (
      <HStack className={classNames(cls.LogNavigation, {}, [className])}>
        <TextSpan text="Страница" className={cls.text} />
        {pages.map((item) => ItemPage(item))}
      </HStack>
    );
  }

  return <div></div>;
});
