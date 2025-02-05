import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { addLog } from 'entities/Log/model/services/addLog';
import { portActions } from 'features/PortSettings';
import { crc16 } from 'shared/lib/crc16';
import { ModbusErrorFC, ModbusFC } from 'shared/lib/modbusCodes';
import { sendToWorker } from 'shared/lib/sendToWorker';

export const slaveStart = createAsyncThunk<any, void, ThunkConfig>('responses/slaveStart', async (_, thunkApi) => {
  const { dispatch } = thunkApi;
  sendToWorker('slave');
  window.portWorker.onmessage = ({ data }) => {
    if (data.type === 'slave' && data.state === 'MSG') {
      const msg = data.payload.msg.split(',');
      let crc = crc16(msg.slice(0, -2));
      // Проверяем контрольную сумму
      let comment = '';
      if (crc.hi == msg.at(-1) && crc.low == msg.at(-2)) {
        const FC = msg.at(1);
        let FCMapped = '';
        if (FC > 100) {
          FCMapped = ModbusErrorFC(FC, msg.at(2));
        } else {
          FCMapped = ModbusFC(FC);
        }
        comment = `Адрес ${msg.at(0)}, код функции ${FC} - ${FCMapped}`;
      } else {
        comment = `Ошибка контрольной суммы, в пакете: CRC Low=${msg.at(-2)} CRC Hi=${msg.at(-1)}, рассчетная: CRC Low=${
          crc.low
        } CRC Hi=${crc.hi}`;
      }
      dispatch(
        addLog({
          msg: data.payload.msg,
          diffTime: data.payload.diffTime,
          comment,
        }),
      );
    }
    if (data.type === 'listen' && data.state === 'close') {
      dispatch(portActions.setPortOpen(false));
    }
  };
});
