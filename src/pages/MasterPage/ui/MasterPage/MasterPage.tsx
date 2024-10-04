import { memo } from 'react';
import cls from './MasterPage.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Buffer } from 'buffer';
/* const Buffer = require('buffer'); */

interface MasterPageProps {
  className?: string;
}

export const MasterPage = memo((props: MasterPageProps) => {
  const { className } = props;
  window.Buffer = Buffer as typeof Buffer;

  const Modbus = require('jsmodbus');
  const SerialPort = require('browser-serialport').SerialPort;
  const options = {
    baudRate: 9600,
  };
  const socket = new SerialPort('/dev/tty-usbserial1', options);
  const client = new Modbus.client.RTU(socket, 1);

  return (
    <div className={classNames(cls.MasterPage, {}, [className])}>
      Страница режима Мастер
    </div>
  );
});
