import { memo } from 'react';
import { Button } from 'shared/ui/Button';
import { BitInByteSelector } from '../BitInByteSelector/BitInByteSelector';
import { ParitySelector } from '../ParitySelector/ParitySelector';
import { RateSelector } from '../RateSelector/RateSelector';
import { StopBitSelector } from '../StopBitSelector/StopBitSelector';

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
      <Button>Выбрать порт</Button>
    </>
  );
});
