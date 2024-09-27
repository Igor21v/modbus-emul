import { memo } from 'react';
import laptop from 'shared/img/laptop.png';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppImage } from 'shared/ui/AppImage';
import { Text } from 'shared/ui/Text';
import cls from './ListenScheme.module.css';
import { ListenSchemeCanvas } from './ListenSchemeCanvas';

interface ListenSchemeProps {
  className?: string;
}

export const ListenScheme = memo((props: ListenSchemeProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ListenScheme, {}, [className])}>
      <div className={classNames(cls.device, {}, [cls.master])}>
        <Text text="Master" align="center" className={cls.text} />
      </div>
      <div className={classNames(cls.device, {}, [cls.slave1])}>
        <Text text="Slave1" align="center" className={cls.text} />
      </div>
      <div className={classNames(cls.device, {}, [cls.slave2])}>
        <Text text="Slave2" align="center" className={cls.text} />{' '}
      </div>
      <div className={classNames(cls.device, {}, [cls.slave3])}>
        <Text text="Slave..." align="center" className={cls.text} />{' '}
      </div>
      <div className={classNames(cls.device, {}, [cls.converter])}>
        <Text
          text="Преобразователь интерфейса"
          align="center"
          className={cls.text}
        />
      </div>
      <AppImage src={laptop} className={cls.laptop} />
      <ListenSchemeCanvas />
    </div>
  );
});
