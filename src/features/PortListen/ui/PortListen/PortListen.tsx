import { listenStart } from 'features/PortListen/model/services/listen';
import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import cls from './PortListen.module.css';
import { closePort } from 'features/PortSettings/model/services/closePort';
import { ListenScheme } from 'entities/ListenScheme/ListenScheme';

interface PortListenProps {
  className?: string;
}

export const PortListen = memo((props: PortListenProps) => {
  const { className } = props;
  const { portIsOpen } = useAppSelector((state) => state.port);
  const dispatch = useAppDispatch();
  /*   useEffect(() => {
    dispatch(listenStart());
  }, [portIsOpen]); */
  useEffect(() => {
    return () => {
      dispatch(closePort());
    };
  }, []);

  return (
    <VStack
      align="center"
      gap="8"
      className={classNames(cls.PortListen, {}, [className])}
    >
      <Text title="Схема подключения" />
      <ListenScheme />
    </VStack>
  );
});
