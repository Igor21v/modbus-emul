import { MutableRefObject, ReactNode, memo, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './WithHint.module.css';
import { TextSpan } from '../TextSpan';

// Разработка компонента временно приостановлена за ненадобностью (использую тег title).
// При возобновлении разработки обратить внимание что при необходимости использования абсолютного позиционировния
// (передавемого в className пропсом), блок все равно будет спозиционирован относительно

interface WithHintProps {
  className?: string;
  children: ReactNode;
  hint: string;
  pressEvent?: boolean;
}
// pressEvent - отображать подсказку принажатии, иначе по времени

export const WithHint = memo((props: WithHintProps) => {
  const { className, children, hint, pressEvent } = props;
  const el = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    el.current.onmouseenter = () => {};
    el.current.onmouseleave = () => {};
  }, []);
  const mods = {
    [cls.pressEvent]: pressEvent,
  };

  return (
    <div ref={el} className={classNames(cls.WithHint, mods, [className])}>
      {children}
      <TextSpan text={hint} className={cls.hint} />
    </div>
  );
});
