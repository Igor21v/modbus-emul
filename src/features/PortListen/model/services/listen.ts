import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { logActions } from 'entities/Log/model/slice/logSlice';

export const listenStart = createAsyncThunk<any, void, ThunkConfig>(
  'listen/start',
  async (_, thunkApi) => {
    const { dispatch } = thunkApi;
    console.log('start listen');
    const port = window.comport;

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
          const date = new Date();
          /* const dateStr = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}` */
          const dateStr = date.toString();
          dispatch(logActions.addRecord({ date: dateStr, msg: `${value}` }));
        }
      } catch (error) {
        // Handle |error|...
      } finally {
        reader.releaseLock();
      }
    }
  },
);
