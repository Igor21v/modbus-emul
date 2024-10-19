import { memo } from 'react';
import cls from './MasterSettings.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface MasterSettingsProps {
    className ?: string;
}

export const MasterSettings = memo((props: MasterSettingsProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.MasterSettings, {}, [className])} >
           
        </div>
    );
});
