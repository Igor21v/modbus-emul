import { memo } from 'react';
import cls from './MasterPage.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
/* const Buffer = require('buffer'); */

interface MasterPageProps {
  className?: string;
}

export const MasterPage = memo((props: MasterPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.MasterPage, {}, [className])}>
      Страница режима Мастер
    </div>
  );
});
