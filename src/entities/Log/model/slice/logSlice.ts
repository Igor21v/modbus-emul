import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { arr } from './stub';

export interface LogState {
  date: number;
  message: string;
}

const initialState: LogState[] = arr;

const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    reset: (state) => {
      state = [];
    },
    addRecord: (state, action: PayloadAction<LogState>) => {
      state.push(action.payload);
    },
  },
});

export const { actions: logActions } = logSlice;
export const { reducer: logReducer } = logSlice;
