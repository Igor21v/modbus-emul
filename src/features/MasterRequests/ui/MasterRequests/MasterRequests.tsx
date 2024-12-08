import { memo, useState } from 'react';
import Unwrap from 'shared/icons/Unwrap';
import Wrap from 'shared/icons/Wrap';
import { Icon } from 'shared/ui/Icon';
import { VStack } from 'shared/ui/Stack';
import { Results } from '../Results/Results';
import { Settings } from '../Settings/Settings';
import cls from './MasterRequests.module.css';

interface MasterRequestsProps {
  className?: string;
}

export const MasterRequests = memo((props: MasterRequestsProps) => {
  const { className } = props;
  const [showConfig, setShowConfig] = useState(true);

  return (
    <VStack className={cls.MasterRequests} gap="16" align="stretch">
      <Icon Svg={Unwrap} hint="Развернуть конфигурацию запросов" onClick={() => setShowConfig(true)} height={50} width={50} />
      <Icon Svg={Wrap} hint="Свернуть конфигурацию запросов" onClick={() => setShowConfig(false)} height={50} width={50} />
      <Settings />
      <Results />
    </VStack>
  );
});
