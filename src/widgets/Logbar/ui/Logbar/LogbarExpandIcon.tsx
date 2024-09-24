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
      <Button
        theme="clear"
        onClick={() => dispatch(appStateActions.expandedLog(false))}
      >
        <Icon Svg={Minimize} />
      </Button>
    );
  }
  return (
    <Button
      theme="clear"
      onClick={() => dispatch(appStateActions.expandedLog(true))}
    >
      <Icon Svg={Expand} />
    </Button>
  );
});
