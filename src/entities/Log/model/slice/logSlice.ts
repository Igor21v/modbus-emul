import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getDate } from 'shared/lib/getDate';

export interface LogItem {
  num: number;
  date: string;
  msg: string;
  diffTime?: number;
  priority?: number;
}

export interface LogState {
  log: LogItem[];
}

const initialState: LogState = { log: [] };

const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    reset: (state) => {
      state.log = [];
    },
    addRecord: (
      state,
      action: PayloadAction<Omit<LogItem, 'num' | 'date'>>,
    ) => {
      const prevNum = state.log.at(-1)?.num || 0;
      const num = prevNum + 1;
      const date = getDate();
      state.log.push({ ...action.payload, num, date });
    },
  },
});

export const { actions: logActions } = logSlice;
export const { reducer: logReducer } = logSlice;
