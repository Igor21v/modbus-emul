import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { arr } from './stub';

export interface LogState {
  num: number;
  date: string;
  msg: string;
  diffTime?: number;
  prior?: number;
}

const initialState: LogState[] = [];

const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    reset: (state) => {
      state = [];
    },
    addRecord: (state, action: PayloadAction<Omit<LogState, 'num'>>) => {
      const prevNum = state.at(-1)?.num || 0;
      const num = prevNum + 1;
      state.push({ ...action.payload, num });
    },
  },
});

export const { actions: logActions } = logSlice;
export const { reducer: logReducer } = logSlice;
