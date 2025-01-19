import { memo } from 'react';
import cls from './Dec.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { TextSpan } from 'shared/ui/TextSpan';
import { InputNum } from 'shared/ui/InputNum';

interface DecProps {
  className?: string;
  value: number;
  editable: boolean;
  setContentReg: (content: number) => void;
}

export const Dec = memo((props: DecProps) => {
  const { className, value, editable, setContentReg } = props;
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
