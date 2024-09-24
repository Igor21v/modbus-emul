import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { logActions } from 'entities/Log/model/slice/logSlice';
import { getDate } from 'shared/lib/getDate';

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
          dispatch(logActions.addRecord({ date: getDate(), msg: `${value}` }));
        }
      } catch (error) {
        // Handle |error|...
      } finally {
        reader.releaseLock();
      }
    }
  },
);
