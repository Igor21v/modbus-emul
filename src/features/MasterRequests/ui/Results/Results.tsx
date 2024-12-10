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
  const requests = useAppSelector((state) => state.requests);

  return (
    <VStack className={classNames(cls.Results, {}, [className])}>
      {Object.entries(requests).map(([id, slave]) => (
        <SlaveItem key={id} slave={slave} />
      ))}
    </VStack>
  );
});
