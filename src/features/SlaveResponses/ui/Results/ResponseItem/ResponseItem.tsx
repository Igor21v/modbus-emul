import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from 'shared/ui/Stack';
import { setResponse } from '../../../model/services/setResponse';
import { Response, ViewType, responsesActions } from '../../../model/slice/responses';
import { Register } from './Register/Register';
import cls from './ResponseItem.module.css';
import { ViewSelect } from './ViewSelect/ViewSelect';

interface ResponseItemProps {
  className?: string;
  request: Response;
  slaveId: number;
  responseId: number;
}

export const ResponseItem = memo((props: ResponseItemProps) => {
  const { className, request, responseId, slaveId } = props;
  const { content, view, aria: func, register } = request;
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

  const editable = func > 4;

  return (
    <HStack className={classNames(cls.RequestItem, {}, [className])} gap="8" wrap max>
      <ViewSelect view={view} onChange={viewHandler} />

      {content.map((value, index) => (
        <Register
          register={register + index}
          value={value}
          view={view}
          key={index}
          setContent={setContent}
          index={index}
          editable={editable}
        />
      ))}
    </HStack>
  );
});
