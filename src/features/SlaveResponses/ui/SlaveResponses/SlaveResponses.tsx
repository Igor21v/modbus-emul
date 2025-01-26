import { memo, useState } from 'react';
import Unwrap from 'shared/icons/Unwrap';
import Wrap from 'shared/icons/Wrap';
import { Icon } from 'shared/ui/Icon';
import { VStack } from 'shared/ui/Stack';
import { Results } from '../Results/Results';
import { Config } from '../Config/Config';
import cls from './MasterRequests.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface SlaveResponsesProps {
  className?: string;
}

export const SlaveResponses = memo((props: SlaveResponsesProps) => {
  const { className } = props;
  const [wrapConfig, setWrapConfig] = useState(false);
  const [wrapResult, setWrapResult] = useState(false);

  return (
    <VStack className={cls.MasterRequests} align="stretch">
      {wrapConfig && <Icon Svg={Unwrap} hint="Развернуть конфигурацию запросов" onClick={() => setWrapConfig(false)} />}
      {!wrapConfig && <Icon Svg={Wrap} hint="Свернуть конфигурацию запросов" onClick={() => setWrapConfig(true)} />}
      <Config className={classNames(cls.animated, { [cls.wrap]: wrapConfig })} />

      {wrapResult && (
        <Icon
          Svg={Unwrap}
          hint="Развернуть результаты запросов"
          onClick={() => setWrapResult(false)}
          classNameWrap={cls.results}
        />
      )}
      {!wrapResult && (
        <Icon Svg={Wrap} hint="Свернуть результаты запросов" onClick={() => setWrapResult(true)} classNameWrap={cls.results} />
      )}
      <Results className={classNames(cls.animated, { [cls.wrap]: wrapResult })} />
    </VStack>
  );
});
