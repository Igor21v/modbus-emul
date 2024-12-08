import { MasterRequests } from 'features/MasterRequests';
import { MasterSettings } from 'features/MasterSettings';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MasterPage.module.css';
/* const Buffer = require('buffer'); */

interface MasterPageProps {
  className?: string;
}

export const MasterPage = memo((props: MasterPageProps) => {
  const { className } = props;

  return (
    <>
      <MasterRequests />
    </>
  );
});
