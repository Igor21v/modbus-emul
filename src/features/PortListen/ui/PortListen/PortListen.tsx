import { memo } from 'react';
import cls from './PortListen.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { listenActions } from 'features/PortListen/model/slice/listenSlice';
import { listenStart } from 'features/PortListen/model/services/listen';

interface PortListenProps {
  className?: string;
}

export const PortListen = memo((props: PortListenProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  dispatch(listenStart());

  return (
    <div className={classNames(cls.PortListen, {}, [className])}>
      Фича прослушки
    </div>
  );
});
