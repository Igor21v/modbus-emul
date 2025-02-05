import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { appStateActions } from 'entities/AppState';
import { addLog } from 'entities/Log/model/services/addLog';
import { listenStart } from 'features/PortListen/model/services/listen';
import { sendToWorker } from 'shared/lib/sendToWorker';

export const openPort = createAsyncThunk<void, void, ThunkConfig>('port/openPort', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  // @ts-ignore
  const serial = navigator.serial;
  if (serial) {
    try {
      // Очищаем список зарегистрированных портов
      let ports = await serial.getPorts();
      ports.forEach((port: any) => {
        port.forget();
      });
      // Регистрируем выбранный пользователем порт
      await serial.requestPort();

      const { baudRate, dataBits, stopBits, parity } = getState().port;
      sendToWorker('open', {
        baudRate,
        dataBits,
        stopBits,
        parity,
      });

      await new Promise<void>((resolve, reject) => {
        window.portWorker.onmessage = ({ data }) => {
          if (data.type === 'open' && data.state === 'OK') {
            resolve();
          }
          if (data.type === 'open' && data.state === 'ERROR') {
            reject(data.error);
          }
        };
      });
      dispatch(appStateActions.setState('Порт открыт'));
      dispatch(appStateActions.resetError());
      dispatch(
        addLog({
          msg: 'Порт открыт',
          priority: 9,
        }),
      );
      dispatch(listenStart());
    } catch (e) {
      dispatch(appStateActions.setState('Ошибка открытия COM-порта ' + e));
      dispatch(appStateActions.setError());
      throw new Error('Ошибка открытия порта');
    }
  } else {
    alert('Ваш браузер не поддерживает работу с COM портами');
    throw new Error('Браузер не поддерживается');
  }
});
