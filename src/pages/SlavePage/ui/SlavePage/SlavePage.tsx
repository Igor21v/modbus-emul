import { SlaveResponses } from 'features/SlaveResponses';
import { memo } from 'react';

interface SlavePageProps {
  className?: string;
}

export const SlavePage = memo((props: SlavePageProps) => {
  const { className } = props;

  return <SlaveResponses />;
});
