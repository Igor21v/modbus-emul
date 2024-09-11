import { createAsyncThunk } from '@reduxjs/toolkit';

export const openPort = createAsyncThunk(
  'port/openPort',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    console.log('thunk enter');
    // @ts-ignore
    if (navigator.serial) {
      try {
        // @ts-ignore
        const port = await navigator.serial.requestPort();
        const { baudRate, dataBits, parity, stopBits } = getState();

        await port.open({
          baudRate,
          dataBits,
          stopBits,
          parity,
        });
        return port;
        console.log(port);
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
        }
        // Continue connecting to the device attached to |port|.
      } catch (e) {
        // The prompt has been dismissed without selecting a device.
      }
    } else {
      alert('Ваш браузер не поддерживает данное приложение');
    }
  },
);
