import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { listenStart } from '../services/listen';
import { arr } from './stub';

export interface ListenState {
  date: number;
  message: string;
}

const initialState: ListenState[] = arr;

const listenSlice = createSlice({
  name: 'listen',
  initialState,
  reducers: {
    reset: (state) => {
      state = [];
    },
    addData: (state, action: PayloadAction<ListenState>) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(listenStart.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});

export const { actions: listenActions } = listenSlice;
export const { reducer: listenReducer } = listenSlice;
