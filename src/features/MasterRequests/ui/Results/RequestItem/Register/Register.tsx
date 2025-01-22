import { ViewType } from 'features/MasterRequests/model/slice/requests';
import { memo, useCallback } from 'react';
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
  index: number;
  setContent: (index: number, content: number) => void;
  editable: boolean;
}

export const Register = memo((props: RegisterProps) => {
  const { value, view, register, setContent, index, editable } = props;
  const setContentReg = useCallback((content: number) => {
    setContent(index, content);
  }, []);

  let RenderVal = null;
  if (view === '2') RenderVal = <Bin value={value} setContentReg={setContentReg} editable={editable} />;
  else if (view === '10') RenderVal = <Dec value={value} editable={editable} setContentReg={setContentReg} />;
  else RenderVal = <Hex value={value} editable={editable} setContentReg={setContentReg} />;

  return (
    <HStack gap="4">
      <TextSpan text={`${register}:`} italic />
      {RenderVal}
    </HStack>
  );
});
