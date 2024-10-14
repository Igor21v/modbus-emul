import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { appStateActions } from 'entities/AppState';
import { addLog } from 'entities/Log/model/services/addLog';

export const closePort = createAsyncThunk<void, void, ThunkConfig>(
  'port/closePort',
  async (_, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    if (getState().port.portIsOpen) {
      try {
        window.portWorker.postMessage({
          type: 'close',
        });
        await new Promise<void>((resolve, reject) => {
          window.portWorker.onmessage = ({ data }) => {
            if (data.type === 'close' && data.state === 'OK') {
              resolve();
            }
            if (data.type === 'close' && data.state === 'ERROR') {
              reject(data.error);
            }
          };
        });
        dispatch(appStateActions.setState('Порт закрыт'));
        dispatch(appStateActions.setError());
        dispatch(
          addLog({
            msg: 'Порт закрыт',
            priority: 1,
          }),
        );
      } catch (e) {
        dispatch(appStateActions.setState('Ошибка закрытия COM-порта ' + e));
        dispatch(appStateActions.setError());
        throw new Error('Ошибка закрытия порта');
      } finally {
        window.portWorker.onmessage = null;
      }
    }
  },
);
