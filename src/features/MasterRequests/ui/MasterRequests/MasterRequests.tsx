import { memo, useState } from 'react';
import Unwrap from 'shared/icons/Unwrap';
import Wrap from 'shared/icons/Wrap';
import { Icon } from 'shared/ui/Icon';
import { VStack } from 'shared/ui/Stack';
import { Results } from '../Results/Results';
import { Config } from '../Settings/Config';
import cls from './MasterRequests.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface MasterRequestsProps {
  className?: string;
}

export const MasterRequests = memo((props: MasterRequestsProps) => {
  const { className } = props;
  const [wrapConfig, setWrapConfig] = useState(true);
  const [wrapResult, setWrapResult] = useState(true);

  return (
    <VStack className={cls.MasterRequests} align="stretch">
      {wrapConfig && <Icon Svg={Unwrap} hint="Развернуть конфигурацию запросов" onClick={() => setWrapConfig(false)} />}
      {!wrapConfig && <Icon Svg={Wrap} hint="Свернуть конфигурацию запросов" onClick={() => setWrapConfig(true)} />}
      <Config className={classNames(cls.animated, { [cls.wrap]: wrapConfig })} />
      {wrapResult && <Icon Svg={Unwrap} hint="Развернуть результаты запросов" onClick={() => setWrapResult(false)} />}
      {!wrapResult && <Icon Svg={Wrap} hint="Свернуть результаты запросов" onClick={() => setWrapResult(true)} />}
      <Results className={classNames(cls.animated, { [cls.wrap]: wrapResult })} />
    </VStack>
  );
});
