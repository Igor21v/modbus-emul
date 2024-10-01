import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getDate } from 'shared/lib/getDate';

// В целях оптимизации производительности логи храним в кольцевом буфере
export const limitLog = 20;
export const limitPage = 5;

export interface LogItem {
  num: number;
  date: string;
  msg: string;
  diffTime?: number;
  priority?: number;
}

export interface LogState {
  log: LogItem[];
  logCounter: number;
  activePage: number;
}

const initialState: LogState = {
  log: Array(limitLog),
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
      action: PayloadAction<Omit<LogItem, 'num' | 'date'>>,
    ) => {
      state.logCounter++;
      const num = state.logCounter;
      const date = getDate();
      const index = num % limitLog;
      state.log[index] = { ...action.payload, num, date };
    },
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const { actions: logActions } = logSlice;
export const { reducer: logReducer } = logSlice;
