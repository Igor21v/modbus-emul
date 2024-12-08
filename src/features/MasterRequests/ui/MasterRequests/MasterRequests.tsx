import { memo } from 'react';
import { Settings } from '../Settings/Settings';
import { Results } from '../Results/Results';

interface MasterRequestsProps {
  className?: string;
}

export const MasterRequests = memo((props: MasterRequestsProps) => {
  const { className } = props;
  return (
    <>
      <Settings /> <Results />
    </>
  );
});
