import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { logActions } from 'entities/Log/model/slice/logSlice';
import { portActions } from 'features/PortSettings';
import { getDate } from 'shared/lib/getDate';

export const listenStart = createAsyncThunk<any, void, ThunkConfig>(
  'listen/start',
  async (_, thunkApi) => {
    const { dispatch } = thunkApi;
    const port = window.comport.port;
    while (port?.readable && !window.comport.needClose) {
      let prevTime = Date.now();
      const reader = port.readable.getReader();
      window.comport.reader = reader;
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            // |reader| has been canceled.
            break;
          }
          const currTime = Date.now();
          const diffTime = currTime - prevTime;
          prevTime = currTime;
          dispatch(
            logActions.addRecord({
              date: getDate(),
              msg: `${value}`,
              diffTime,
            }),
          );
        }
      } catch (error) {
        // Handle |error|...
      } finally {
        reader.releaseLock();
      }
    }
    if (port) {
      await port.close();
      dispatch(portActions.setPortOpen(false));
      window.comport.port = undefined;
    }
  },
);
