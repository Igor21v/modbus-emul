import { memo } from 'react';
import cls from './PortSettings.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { RateSelector } from '../RateSelector/RateSelector';
import { ParitySelector } from '../ParitySelector/ParitySelector';

interface PortSettingsProps {
  className?: string;
}

export const PortSettings = memo((props: PortSettingsProps) => {
  const { className } = props;

  return (
    <>
      <RateSelector />
      <ParitySelector />
    </>
  );
});
