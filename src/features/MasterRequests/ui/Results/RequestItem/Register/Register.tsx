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
  let renderVal = value.toString(view);
  if (isNaN(value)) renderVal = '****';
  return (
    <HStack gap="4" className={cls['view' + view]}>
      <TextSpan text={`${register}:`} italic />
      <TextSpan text={renderVal} />
    </HStack>
  );
});
