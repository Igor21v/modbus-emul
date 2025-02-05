/* eslint-disable no-restricted-globals */

import listen from './listen';
import open from './open';
import close from './close';
import { Data, WorkerStateType } from './types';

const ws: WorkerStateType = {
  port: undefined,
  reader: undefined,
  needClose: false,
  baudRate: 9600,
};

// Обработка получения сообщения
self.onmessage = ({ data }: { data: Data }) => {
  if (data.type === 'open') open(ws, data.props);
  else if (data.type === 'close') close(ws);
  else if (data.type === 'listen') listen(ws);
};

export {};
