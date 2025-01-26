import { memo } from 'react';
import { InputNum } from 'shared/ui/InputNum';
import cls from './Dec.module.css';

interface DecProps {
  value: number;
  editable: boolean;
  setContentReg: (content: number) => void;
}

export const Dec = memo((props: DecProps) => {
  const { value, editable, setContentReg } = props;
  const renderVal = value.toString(10);

  return (
    <InputNum
      initVal={+renderVal}
      className={cls.Dec}
      classNameInput={cls.input}
      readOnly={!editable}
      min={0}
      max={65535}
      onChange={setContentReg}
    />
  );
});
