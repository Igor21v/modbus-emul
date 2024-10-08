import { memo } from 'react';
import cls from './ListenPage.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { PortListen } from 'features/PortListen';
import { Text } from 'shared/ui/Text';

interface ListenPageProps {
  className?: string;
}

export const ListenPage = memo((props: ListenPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ListenPage, {}, [className])}>
      <PortListen />
    </div>
  );
});
