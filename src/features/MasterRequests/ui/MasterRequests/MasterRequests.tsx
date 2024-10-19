import { memo } from 'react';
import cls from './MasterRequests.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface MasterRequestsProps {
    className ?: string;
}

export const MasterRequests = memo((props: MasterRequestsProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.MasterRequests, {}, [className])} >
           
        </div>
    );
});
