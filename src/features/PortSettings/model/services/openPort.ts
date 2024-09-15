import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const openPort = createAsyncThunk<void, void, ThunkConfig>(
  'port/openPort',
  async (_, thunkApi) => {
    const { getState } = thunkApi;
    // @ts-ignore
    if (navigator.serial) {
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
    } else {
      alert('Ваш браузер не поддерживает данное приложение');
      throw new Error('Браузер не поддерживается');
    }
  },
);
