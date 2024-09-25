import { appStateActions } from 'entities/AppState';
import { memo } from 'react';
import Expand from 'shared/icons/Expand';
import Minimize from 'shared/icons/Minimize';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';

interface LogbarProps {
  className?: string;
}

export const LogbarExpandIcon = memo((props: LogbarProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const expandedLog = useAppSelector((state) => state.appState.expandedLog);
  if (expandedLog) {
    return (
      <Icon
        Svg={Minimize}
        onClick={() => dispatch(appStateActions.expandedLog(false))}
      />
    );
  }
  return (
    <Icon
      Svg={Expand}
      onClick={() => dispatch(appStateActions.expandedLog(true))}
    />
  );
});
