import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  addLogCounter,
  limitLogs,
  logActions,
  logCounter,
} from 'entities/Log/model/slice/logSlice';
import { getDate } from 'shared/lib/getDate';
import { LogBuffer, LogItemType } from '../types/logTypes';

let logBuffer: LogBuffer = [];

export const addLog = createAsyncThunk<
  void,
  Omit<LogItemType, 'num' | 'date'>,
  ThunkConfig
>('log/add', async (payload, thunkApi) => {
  const { dispatch, getState } = thunkApi;
  addLogCounter();
  const num = logCounter;
  const date = getDate();
  const index = num % limitLogs;
  logBuffer.push({ index, item: { ...payload, date, num } });
  dispatch(logActions.addRecords(logBuffer));
  logBuffer = [];
});
