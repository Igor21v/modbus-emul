import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  setLogCounter,
  limitLogs,
  logActions,
} from 'entities/Log/model/slice/logSlice';
import { getDate } from 'shared/lib/getDate';
import { LogBuffer, LogItemType } from '../types/logTypes';

let logBuffer: LogBuffer = [];
let busy: boolean;

// Номер сообщения
let num = -1;
export const clearNum = () => {
  num = -1;
};

// Дебаунсим запись логов чтобы часто не менять стейт, иначе поплывет производительность и время будет не точное

export const addLog = createAsyncThunk<
  void,
  Omit<LogItemType, 'num' | 'date'>,
  ThunkConfig
>('log/add', async (payload, thunkApi) => {
  const { dispatch } = thunkApi;
  num++;
  const date = getDate();
  const index = num % limitLogs;
  logBuffer.push({ index, item: { ...payload, date, num } });
  if (!busy) {
    busy = true;
    setTimeout(() => {
      dispatch(logActions.addRecords(logBuffer));
      setLogCounter(num);
      logBuffer = [];
      busy = false;
    }, 200);
  }
});
