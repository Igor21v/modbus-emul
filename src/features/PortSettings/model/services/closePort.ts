import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { appStateActions } from 'entities/AppState';
import { logActions } from 'entities/Log';
import { addLog } from 'entities/Log/model/services/addLog';

export const closePort = createAsyncThunk<void, void, ThunkConfig>(
  'port/closePort',
  async (_, thunkApi) => {
    const { dispatch } = thunkApi;
    try {
      if (window.comport.port) {
        window.comport.needClose = true;
        await window.comport.reader?.cancel();
        // Можно закрывать порт здесь, сейчас реализовано по рекомендации из документации в listen сервисе
        /* const port = window.comport.port;
        port.close(); */
        dispatch(appStateActions.setState('Порт закрыт'));
        dispatch(appStateActions.setError());
        dispatch(
          addLog({
            msg: 'Порт закрыт',
            priority: 1,
          }),
        );
      }
    } catch (e) {
      dispatch(appStateActions.setState('Ошибка закрытия COM-порта ' + e));
      dispatch(appStateActions.setError());
      throw new Error('Ошибка закрытия порта');
    }
  },
);
