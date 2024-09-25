import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { appStateActions } from 'entities/AppState';

export const closePort = createAsyncThunk<void, void, ThunkConfig>(
  'port/closePort',
  async (_, thunkApi) => {
    try {
      if (window.comport.port) {
        window.comport.needClose = true;
        await window.comport.reader?.cancel();
        // Можно закрывать порт здесь, сейчас реализовано по рекомендации из документации в listen сервисе
        /* const port = window.comport.port;
        port.close(); */
        thunkApi.dispatch(appStateActions.setState('Порт закрыт'));
        thunkApi.dispatch(appStateActions.setError());
      }
    } catch (e) {
      thunkApi.dispatch(
        appStateActions.setState('Ошибка закрытия COM-порта ' + e),
      );
      thunkApi.dispatch(appStateActions.setError());
      throw new Error('Ошибка закрытия порта');
    }
  },
);
