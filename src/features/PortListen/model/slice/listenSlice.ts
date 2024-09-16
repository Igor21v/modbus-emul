import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { listenStart } from '../services/listen';

export interface ListenState {
  data: string[];
}

const initialState: ListenState = {
  data: [],
};

const listenSlice = createSlice({
  name: 'listen',
  initialState,
  reducers: {
    reset: (state) => {
      state.data = [];
    },
    addData: (state, action: PayloadAction<string>) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(listenStart.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { actions: listenActions } = listenSlice;
export const { reducer: listenReducer } = listenSlice;
