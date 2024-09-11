import { memo } from 'react';
import { Button } from 'shared/ui/Button';
import { BitInByteSelector } from '../DataBitSelector/DataBitSelector';
import { ParitySelector } from '../ParitySelector/ParitySelector';
import { RateSelector } from '../RateSelector/RateSelector';
import { StopBitSelector } from '../StopBitSelector/StopBitSelector';
import { OpenPortButton } from '../OpenPortButton/OpenPortButton';

interface PortSettingsProps {
  className?: string;
}

export const PortSettings = memo((props: PortSettingsProps) => {
  const { className } = props;
  return (
    <>
      <RateSelector />
      <ParitySelector />
      <StopBitSelector />
      <BitInByteSelector />
      <OpenPortButton />
    </>
  );
});
