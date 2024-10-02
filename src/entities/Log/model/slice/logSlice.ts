import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getDate } from 'shared/lib/getDate';

// В целях оптимизации производительности логи храним в кольцевом буфере
export const logOnPage = 1000;
export const limitPages = 30;
export const limitLogs = logOnPage * limitPages;

export interface LogItemType {
  num: number;
  date: string;
  msg: string;
  diffTime?: number;
  priority?: number;
}

export interface LogState {
  log: LogItemType[];
  logCounter: number;
  activePage: number;
}

const initialState: LogState = {
  log: Array(limitLogs),
  logCounter: -1,
  activePage: 1,
};

const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    reset: (state) => {
      state.log = [];
      state.logCounter = -1;
      state.activePage = 1;
    },
    addRecord: (
      state,
      action: PayloadAction<Omit<LogItemType, 'num' | 'date'>>,
    ) => {
      state.logCounter++;
      const num = state.logCounter;
      const date = getDate();
      const index = num % limitLogs;
      state.log[index] = { ...action.payload, num, date };
    },
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { actions: logActions } = logSlice;
export const { reducer: logReducer } = logSlice;
