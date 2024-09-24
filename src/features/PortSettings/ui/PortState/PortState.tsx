import { memo } from 'react';
import cls from './PortState.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface PortStateProps {
    className ?: string;
}

export const PortState = memo((props: PortStateProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.PortState, {}, [className])} >
           
        </div>
    );
});
