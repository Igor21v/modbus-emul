import { memo } from 'react';
import cls from './Results.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { VStack } from 'shared/ui/Stack';
import { SlaveItem } from './SlaveItem/SlaveItem';

interface ResultsProps {
  className?: string;
}

export const Results = memo((props: ResultsProps) => {
  const { className } = props;
  const responses = useAppSelector((state) => state.responses);

  return (
    <VStack className={classNames(cls.Results, {}, [className])}>
      {Object.entries(responses).map(([id, slave]) => (
        <SlaveItem key={id} slave={slave} slaveId={+id} />
      ))}
    </VStack>
  );
});
