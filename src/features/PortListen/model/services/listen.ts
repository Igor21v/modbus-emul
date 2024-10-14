import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { addLog } from 'entities/Log/model/services/addLog';
import { portActions } from 'features/PortSettings';

export const listenStart = createAsyncThunk<any, void, ThunkConfig>(
  'listen/start',
  async (_, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    if (getState().port.portIsOpen) {
      window.portWorker.postMessage({
        type: 'listen',
      });
      window.portWorker.onmessage = ({ data }) => {
        console.log('LISTEN ' + data.type + '  ' + data.state);
        if (data.type === 'listen' && data.state === 'MSG') {
          dispatch(
            addLog({
              msg: data.payload.msg,
              diffTime: data.payload.diffTime,
            }),
          );
        }
        if (data.type === 'listen' && data.state === 'close') {
          dispatch(portActions.setPortOpen(false));
        }
      };
    }
  },
);
