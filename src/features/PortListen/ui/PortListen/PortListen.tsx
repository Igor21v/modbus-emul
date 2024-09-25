import { listenStart } from 'features/PortListen/model/services/listen';
import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import cls from './PortListen.module.css';
import { closePort } from 'features/PortSettings/model/services/closePort';

interface PortListenProps {
  className?: string;
}

export const PortListen = memo((props: PortListenProps) => {
  const { className } = props;
  const { portIsOpen } = useAppSelector((state) => state.port);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listenStart());
    console.log('port open? ' + portIsOpen);
  }, [portIsOpen]);
  useEffect(() => {
    return () => {
      dispatch(closePort());
    };
  }, []);

  return (
    <VStack className={classNames(cls.PortListen, {}, [className])}>
      <Text title="Здесь будет схема" />
    </VStack>
  );
});
