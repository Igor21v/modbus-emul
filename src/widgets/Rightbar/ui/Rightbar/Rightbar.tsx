import { MasterSettings } from 'features/MasterSettings';
import { PortSettings } from 'features/PortSettings';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import cls from './Rightbar.module.css';
import { useLocation } from 'react-router-dom';
import { SlaveSettings } from 'features/SlaveSettings';

interface RightbarProps {
  className?: string;
}

export const Rightbar = memo((props: RightbarProps) => {
  const { className } = props;
  const { pathname } = useLocation();
  return (
    <VStack align="center" justify="center" className={cls.Rightbar}>
      {pathname === '/' && <MasterSettings />}
      {pathname === '/slave' && <SlaveSettings />}
      <PortSettings />
    </VStack>
  );
});
