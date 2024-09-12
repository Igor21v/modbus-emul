import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const openPort = createAsyncThunk<any, void, ThunkConfig>(
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
      return port;
    } else {
      alert('Ваш браузер не поддерживает данное приложение');
      throw new Error('Браузер не поддерживается');
    }
  },
);

/*         console.log(port);
        while (port.readable) {
          const reader = port.readable.getReader();
          try {
            while (true) {
              const { value, done } = await reader.read();
              if (done) {
                // |reader| has been canceled.
                break;
              }
              console.log(value);
            }
          } catch (error) {
            // Handle |error|...
          } finally {
            reader.releaseLock();
          }
        } */
// Continue connecting to the device attached to |port|.
