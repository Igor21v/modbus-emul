import { listenStart } from 'features/PortListen/model/services/listen';
import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { VStack } from 'shared/ui/Stack';
import { TextSpan } from 'shared/ui/TextSpan';
import cls from './PortListen.module.css';
import { Text } from 'shared/ui/Text';

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
  const d = new Date();
  var date =
    d.getFullYear() +
    '-' +
    ('0' + (d.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + d.getDate()).slice(-2) +
    ' ' +
    d.toLocaleTimeString() +
    ':' +
    ('00' + d.getMilliseconds()).slice(-3);

  return (
    <VStack className={classNames(cls.PortListen, {}, [className])}>
      <Text title="Здесь будет схема" />
      {date}
    </VStack>
  );
});
