import { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.css';
import { Card } from '../Card/Card';
import { genericMemo } from 'shared/lib/components/GenericMemo/GenericMemo';

export interface TabItem<T> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T> {
  className?: string;
  tabs: TabItem<T>[];
  value: string;
  onTabClick?: (tab: TabItem<T>) => void;
}

const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { className, tabs, onTabClick, value } = props;
  const clickHandle = useCallback(
    (tab: TabItem<T>) => () => {
      onTabClick?.(tab);
    },
    [onTabClick],
  );
  return (
    <>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? 'normal' : 'outlined'}
          className={cls.tab}
          key={tab.value}
          onClick={clickHandle(tab)}
          shadow={tab.value !== value}
        >
          {tab.content}
        </Card>
      ))}
    </>
  );
};

const TabsMemo = genericMemo(Tabs);
export { TabsMemo as Tabs };
