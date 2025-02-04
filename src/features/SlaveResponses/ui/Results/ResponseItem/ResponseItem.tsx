import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack, VStack } from 'shared/ui/Stack';
import { setResponse } from '../../../model/services/setResponse';
import { Response, ViewType, responsesActions } from '../../../model/slice/responses';
import { Register } from 'entities/Register';
import cls from './ResponseItem.module.css';
import { ViewSelect } from 'entities/ViewSelect';

interface ResponseItemProps {
  className?: string;
  request: Response;
  slaveId: number;
  responseId: number;
}

export const ResponseItem = memo((props: ResponseItemProps) => {
  const { className, request, responseId, slaveId } = props;
  const { content, view, aria, register } = request;
  const dispatch = useAppDispatch();
  const viewHandler = (view: ViewType) => {
    dispatch(responsesActions.setView({ slaveId, responseId, view }));
  };
  const setContent = useCallback(
    (register: number, content: number) => {
      dispatch(setResponse({ setContent: { content, register, responseId, slaveId } }));
    },
    [slaveId, responseId],
  );
  const discrete = aria < 3;

  return (
    <VStack gap="4">
      {!discrete && <ViewSelect view={view} onChange={viewHandler} className={cls.viewSelect} />}
      <HStack className={classNames(cls.RequestItem, {}, [className])} gap="16" wrap max>
        {content.map((value, index) => (
          <Register
            register={register + index}
            value={value}
            view={view}
            key={index}
            setContent={setContent}
            index={index}
            editable={true}
            discrete={discrete}
          />
        ))}
      </HStack>
    </VStack>
  );
});
