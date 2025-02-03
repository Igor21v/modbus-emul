import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Discrete.module.css';

interface DiscreteProps {
  className?: string;
  value: number;
  setContentReg: (content: number) => void;
  editable: boolean;
}

export const Discrete = memo((props: DiscreteProps) => {
  const { className, value, setContentReg, editable } = props;

  const switchDiscrete = () => {
    if (value) setContentReg(0);
    else setContentReg(1);
  };

  const mods = {
    off: !value,
  };

  return (
    <div className={classNames(cls.Discrete, mods)} onClick={switchDiscrete}>
      {value}
    </div>
  );
});
