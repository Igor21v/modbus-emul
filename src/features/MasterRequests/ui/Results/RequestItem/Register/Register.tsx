import { ViewType } from 'features/MasterRequests/model/slice/requests';
import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import { TextSpan } from 'shared/ui/TextSpan';
import cls from './Register.module.css';

interface RegisterProps {
  value: number;
  view: ViewType;
  register: number;
}

export const Register = memo((props: RegisterProps) => {
  const { value, view, register } = props;
  let renderVal = '';
  if (isNaN(value)) renderVal = '****';
  if (view === '2') {
    let str = '0'.repeat(15) + value.toString(2);
    renderVal = str.slice(-16, -12) + ' ' + str.slice(-12, -8) + ' ' + str.slice(-8, -4) + ' ' + str.slice(-4);
  } else renderVal = value.toString(+view);

  return (
    <HStack gap="4">
      <TextSpan text={`${register}:`} italic />
      <TextSpan text={renderVal} className={cls['view' + view]} />
    </HStack>
  );
});
