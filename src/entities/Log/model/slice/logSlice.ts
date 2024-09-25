import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { arr } from './stub';
import { getDate } from 'shared/lib/getDate';

export interface LogState {
  num: number;
  date: string;
  msg: string;
  diffTime?: number;
  priority?: number;
}

const initialState: LogState[] = [];

const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    reset: (state) => {
      state = [];
    },
    addRecord: (
      state,
      action: PayloadAction<Omit<LogState, 'num' | 'date'>>,
    ) => {
      const prevNum = state.at(-1)?.num || 0;
      const num = prevNum + 1;
      const date = getDate();
      state.push({ ...action.payload, num, date });
    },
  },
});

export const { actions: logActions } = logSlice;
export const { reducer: logReducer } = logSlice;
