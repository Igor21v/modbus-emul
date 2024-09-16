import { memo, useEffect } from 'react';
import cls from './PortListen.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { listenActions } from 'features/PortListen/model/slice/listenSlice';
import { listenStart } from 'features/PortListen/model/services/listen';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { Text } from 'shared/ui/Text';
import { VStack } from 'shared/ui/Stack';
import { TextSpan } from 'shared/ui/TextSpan';

interface PortListenProps {
  className?: string;
}

export const PortListen = memo((props: PortListenProps) => {
  const { className } = props;
  const { data } = useAppSelector((state) => state.listen);
  const { portIsOpen } = useAppSelector((state) => state.port);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listenStart());
    console.log('port is open ' + portIsOpen);
  }, [portIsOpen]);

  return (
    <VStack className={classNames(cls.PortListen, {}, [className])}>
      {data.map((item, index) => (
        <TextSpan text={item} key={index} />
      ))}
    </VStack>
  );
});
