import { ReactElement } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainLayout.module.css';

interface MainLayoutProps {
  leftbar: ReactElement;
  rightbar: ReactElement;
  logbar: ReactElement;
  log: ReactElement;
  content: ReactElement;
  state: ReactElement;
  expandedLog: boolean;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { content, leftbar, logbar, rightbar, state, log, expandedLog } = props;

  return (
    <div
      className={classNames(
        cls.MainLayout,
        { [cls.expandedLog]: expandedLog, [cls.compr]: !expandedLog },
        ['app'],
      )}
      id="app"
    >
      {!expandedLog && (
        <>
          <div className={cls.leftbar}>{leftbar}</div>
          <div className={cls.rightbar}>{rightbar}</div>
          <div className={cls.content} id="content">
            {content}
          </div>
        </>
      )}
      <div className={cls.log}>{log}</div>
      <div className={cls.logbar}>{logbar}</div>
      <div className={cls.state}>{state}</div>
    </div>
  );
};
