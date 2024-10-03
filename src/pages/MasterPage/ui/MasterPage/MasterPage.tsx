import { memo } from 'react';
import cls from './MasterPage.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface MasterPageProps {
  className?: string;
}

export const MasterPage = memo((props: MasterPageProps) => {
  const { className } = props;

  /*  const Modbus = require('jsmodbus');
  const net = require('net'); */
  /*   const socket = new net.Socket();
  const client = new Modbus.client.TCP(socket, 1);
  const options = {
    host: '127.0.0.1',
    port: 502,
  };
  // use socket.on('open', ...) when using serialport
  socket.on('connect', function () {
    // make some calls

    client.readCoils(0, 13).then(function (resp: any) {
      // resp will look like { response : [TCP|RTU]Response, request: [TCP|RTU]Request }
      // the data will be located in resp.response.body.coils: <Array>, resp.response.body.payload: <Buffer>

      console.log(resp);
    }, console.error);
  });

  socket.connect(options); */
  return (
    <div className={classNames(cls.MasterPage, {}, [className])}>
      Страница режима Мастер
    </div>
  );
});
