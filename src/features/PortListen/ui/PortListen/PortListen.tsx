import { listenStart } from 'features/PortListen/model/services/listen';
import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { VStack } from 'shared/ui/Stack';
import { TextSpan } from 'shared/ui/TextSpan';
import cls from './PortListen.module.css';

interface PortListenProps {
  className?: string;
}

export const PortListen = memo((props: PortListenProps) => {
  const { className } = props;
  const { portIsOpen } = useAppSelector((state) => state.port);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listenStart());
    console.log('port is open ' + portIsOpen);
  }, [portIsOpen]);

  return (
    <VStack className={classNames(cls.PortListen, {}, [className])}>
      Здесь будет схема
    </VStack>
  );
});
