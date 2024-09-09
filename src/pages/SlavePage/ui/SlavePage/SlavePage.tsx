import { memo } from 'react';
import cls from './SlavePage.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface SlavePageProps {
    className ?: string;
}

export const SlavePage = memo((props: SlavePageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.SlavePage, {}, [className])} >
           
        </div>
    );
});
