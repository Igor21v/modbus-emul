import { memo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button';
import { openPort } from '../../model/services/openPort';

interface OpenPortButtonProps {
  className?: string;
}

export const OpenPortButton = memo((props: OpenPortButtonProps) => {
  const dispatch = useAppDispatch();
  const buttonHandler = () => {
    console.log('Button enter');
    dispatch(openPort());
  };
  return <Button onClick={buttonHandler}>Выбрать порт</Button>;
});
