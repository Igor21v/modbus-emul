import { memo } from 'react';
import laptop from 'shared/img/laptop.png';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppImage } from 'shared/ui/AppImage';
import { Text } from 'shared/ui/Text';
import cls from './ListenScheme.module.css';
import { ListenSchemeCanvas } from './ListenSchemeCanvas';
import { WithHint } from 'shared/ui/WithHint';

interface ListenSchemeProps {
  className?: string;
}

export const ListenScheme = memo((props: ListenSchemeProps) => {
  const { className } = props;
  const titleSlave =
    'Ведомое устройство в сети Модбас (исполнительный механизм, датчик и т.д.)';

  return (
    <div className={classNames(cls.ListenScheme, {}, [className])}>
      <div
        className={classNames(cls.device, {}, [cls.master])}
        title="Ведущее устройство в сети Модбас (ПЛК, преобразователь интерфейса и т.д.)"
      >
        <Text text="Master" align="center" className={cls.text} />
      </div>
      <div
        className={classNames(cls.device, {}, [cls.slave1])}
        title={titleSlave}
      >
        <Text text="Slave1" align="center" className={cls.text} />
      </div>
      <div
        className={classNames(cls.device, {}, [cls.slave2])}
        title={titleSlave}
      >
        <Text text="Slave2" align="center" className={cls.text} />
      </div>
      <div
        className={classNames(cls.device, {}, [cls.slave3])}
        title={titleSlave}
      >
        <Text text="Slave..." align="center" className={cls.text} />
      </div>
      <div
        className={classNames(cls.device, {}, [cls.converter])}
        title="Преобразователь для подключения ПК к RS485"
      >
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
