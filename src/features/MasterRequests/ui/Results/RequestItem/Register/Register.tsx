import { ViewType } from 'features/MasterRequests/model/slice/requests';
import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import { TextSpan } from 'shared/ui/TextSpan';
import cls from './Register.module.css';
import { Bin } from '../Bin/Bin';
import { Hex } from '../Hex/Hex';
import { Dec } from '../Dec/Dec';

interface RegisterProps {
  value: number;
  view: ViewType;
  register: number;
}

export const Register = memo((props: RegisterProps) => {
  const { value, view, register } = props;

  let RenderVal = null;
  if (isNaN(value)) RenderVal = <TextSpan text={'****'} className={cls['view' + view]} />;
  else if (view === '2') RenderVal = <Bin value={value} />;
  else if (view === '10') RenderVal = <Hex value={value} />;
  else RenderVal = <Dec value={value} />;

  return (
    <HStack gap="4">
      <TextSpan text={`${register}:`} italic />
      {RenderVal}
    </HStack>
  );
});
