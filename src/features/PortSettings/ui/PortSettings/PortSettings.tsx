import { memo } from 'react';
import { Button } from 'shared/ui/Button';
import { BitInByteSelector } from '../DataBitSelector/DataBitSelector';
import { ParitySelector } from '../ParitySelector/ParitySelector';
import { RateSelector } from '../RateSelector/RateSelector';
import { StopBitSelector } from '../StopBitSelector/StopBitSelector';
import { OpenPortButton } from '../OpenPortButton/OpenPortButton';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { logActions } from 'entities/Log';
import { addLog } from 'entities/Log/model/services/addLog';

interface PortSettingsProps {
  className?: string;
}

export const PortSettings = memo((props: PortSettingsProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  return (
    <>
      <RateSelector />
      <ParitySelector />
      <StopBitSelector />
      <BitInByteSelector />
      <OpenPortButton />
      <Button
        onClick={() => dispatch(addLog({ msg: 'Тестовый лог', priority: 9 }))}
      >
        Add test log
      </Button>
    </>
  );
});
