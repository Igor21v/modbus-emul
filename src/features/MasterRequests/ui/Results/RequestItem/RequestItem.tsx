import { setRequest } from 'features/MasterRequests/model/services/setRequest';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import Arrows from 'shared/icons/Arrows';
import Cycle from 'shared/icons/Cycle';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon, IconTheme } from 'shared/ui/Icon';
import { HStack, VStack } from 'shared/ui/Stack';
import { Request, ViewType, requestsActions } from '../../../model/slice/requests';

import { Register } from 'entities/Register';
import Send from 'shared/icons/Send';
import cls from './RequestItem.module.css';
import { ViewSelect } from 'entities/ViewSelect';

interface RequestItemProps {
  className?: string;
  request: Request;
  slaveId: number;
  requestId: number;
}

export const RequestItem = memo((props: RequestItemProps) => {
  const { className, request, requestId, slaveId } = props;
  const { content, view, loopRec, func, link, register } = request;
  const dispatch = useAppDispatch();
  const viewHandler = (view: ViewType) => {
    dispatch(requestsActions.setView({ slaveId, requestId, view }));
  };
  const setContent = useCallback(
    (register: number, content: number) => {
      dispatch(setRequest({ setContent: { content, register, requestId, slaveId } }));
    },
    [slaveId, requestId],
  );
  const setLoopRec = useCallback(() => {
    dispatch(setRequest({ setLoopRec: { requestId, slaveId, loopRec: !loopRec } }));
  }, [loopRec]);
  const sendCmdRec = useCallback(() => {
    dispatch(setRequest({ sendCmdRec: { requestId, slaveId } }));
  }, []);

  const editable = func > 4;
  const discrete = func === 1 || func === 2 || func === 5 || func === 15;
  const linkTheme: IconTheme = link ? 'success' : 'error';
  const cycleTheme: IconTheme = loopRec ? 'success' : 'primary';

  return (
    <VStack gap="4">
      <HStack className={classNames(cls.state, {}, [className])} gap="8">
        <Icon Svg={Arrows} hint="Зеленый - связь есть, красный - нет связи или ответ с ошибкой" theme={linkTheme} />
        {!discrete && <ViewSelect view={view} onChange={viewHandler} />}
        {editable && <Icon Svg={Cycle} hint="Запись каждый цикл обмена" onClick={setLoopRec} theme={cycleTheme} />}
        {!loopRec && editable && <Icon Svg={Send} hint="Отпрвить запрос записи" onClick={sendCmdRec} />}
      </HStack>
      <HStack className={classNames(cls.data, {}, [className])} gap="8" wrap max>
        {content.map((value, index) => (
          <Register
            register={register + index}
            value={value}
            view={view}
            key={index}
            setContent={setContent}
            index={index}
            editable={editable}
            discrete={discrete}
          />
        ))}
      </HStack>
    </VStack>
  );
});
