import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { appStateActions } from 'entities/AppState';

export const openPort = createAsyncThunk<void, void, ThunkConfig>(
  'port/openPort',
  async (_, thunkApi) => {
    const { getState } = thunkApi;
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
        window.comport = port;
      } catch (e) {
        thunkApi.dispatch(
          appStateActions.setState('Ошибка открытия COM-порта ' + e),
        );
        thunkApi.dispatch(appStateActions.setError());
        throw new Error('Ошибка открытия порта');
      }
    } else {
      alert('Ваш браузер не поддерживает работу с COM портами');
      throw new Error('Браузер не поддерживается');
    }
  },
);
