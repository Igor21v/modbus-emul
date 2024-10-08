import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { LogBuffer, LogState } from '../types/logTypes';
import { clearNum } from '../services/addLog';

// В целях оптимизации производительности логи храним в кольцевом буфере
export const logOnPage = 100;
export const limitPages = 30;
export const limitLogs = logOnPage * limitPages;

// Счетчик храним не в стейте чтобы не вызывать лишние обновления при накоплении буфера
export let logCounter = -1;
export const setLogCounter = (count: number) => {
  logCounter = count;
};

const initialState: LogState = {
  log: Array(limitLogs),
  activePage: 1,
};

const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    reset: (state) => {
      state.log = [];
      logCounter = -1;
      clearNum();
      state.activePage = 1;
    },
    addRecords: (state, action: PayloadAction<LogBuffer>) => {
      action.payload.forEach((log) => {
        state.log[log.index] = log.item;
      });
    },
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { actions: logActions } = logSlice;
export const { reducer: logReducer } = logSlice;
