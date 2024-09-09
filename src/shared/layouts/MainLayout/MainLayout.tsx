import { memo, ReactElement } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainLayout.module.css';

interface MainLayoutProps {
  leftbar: ReactElement;
  rightbar: ReactElement;
  logbar: ReactElement;
  content: ReactElement;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { content, leftbar, logbar, rightbar } = props;

  return (
    <div className={classNames(cls.MainLayout, {}, ['app'])} id="app">
      <div className={cls.leftbar}>{leftbar}</div>
      <div className={cls.rightbar}>{rightbar}</div>
      <div className={cls.logbar}>{logbar}</div>
      <div className={cls.content} id="content">
        {content}
      </div>
    </div>
  );
};
