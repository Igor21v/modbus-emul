import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { appStateActions } from 'entities/AppState';
import { logActions } from 'entities/Log';
import { addLog } from 'entities/Log/model/services/addLog';

export const openPort = createAsyncThunk<void, void, ThunkConfig>(
  'port/openPort',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    // @ts-ignore
    if (navigator.serial) {
      try {
        // @ts-ignore
        const port = await navigator.serial.requestPort();
        const { baudRate, dataBits, stopBits, parity } = getState().port;
        await port.open({
          baudRate,
          dataBits,
          stopBits,
          parity,
        });
        window.comport.port = port;
        window.comport.needClose = false;
        dispatch(appStateActions.setState('Порт открыт'));
        dispatch(appStateActions.resetError());
        dispatch(
          addLog({
            msg: 'Порт открыт',
            priority: 9,
          }),
        );
      } catch (e) {
        dispatch(appStateActions.setState('Ошибка открытия COM-порта ' + e));
        dispatch(appStateActions.setError());
        throw new Error('Ошибка открытия порта');
      }
    } else {
      alert('Ваш браузер не поддерживает работу с COM портами');
      throw new Error('Браузер не поддерживается');
    }
  },
);
