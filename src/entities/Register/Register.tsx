import { ViewType } from 'features/MasterRequests/model/slice/requests';
import { memo, useCallback } from 'react';
import { HStack } from 'shared/ui/Stack';
import { TextSpan } from 'shared/ui/TextSpan';
import { Bin } from './Bin/Bin';
import { Dec } from './Dec/Dec';
import { Hex } from './Hex/Hex';
import cls from './Register.module.css';
import { Discrete } from './Discrete/Discrete';

interface RegisterProps {
  value: number;
  view: ViewType;
  register: number;
  index: number;
  setContent: (index: number, content: number) => void;
  editable: boolean;
  discrete: boolean;
}

export const Register = memo((props: RegisterProps) => {
  const { value, view, register, setContent, index, editable, discrete } = props;
  const setContentReg = useCallback((content: number) => {
    setContent(index, content);
  }, []);
  if (discrete && value > 1) {
    setContentReg(0);
  }

  let RenderVal = null;
  if (discrete) RenderVal = <Discrete value={value} setContentReg={setContentReg} editable={editable} />;
  else if (view === '2') RenderVal = <Bin value={value} setContentReg={setContentReg} editable={editable} />;
  else if (view === '10') RenderVal = <Dec value={value} editable={editable} setContentReg={setContentReg} />;
  else RenderVal = <Hex value={value} editable={editable} setContentReg={setContentReg} />;

  return (
    <HStack gap="4">
      <TextSpan text={`${register}:`} italic className={cls.name} align="right" />
      {RenderVal}
    </HStack>
  );
});
