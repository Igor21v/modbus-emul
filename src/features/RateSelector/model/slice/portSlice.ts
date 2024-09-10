import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PortState {
  rate: string;
}

const initialState: PortState = {
  rate: '9600',
};

const portSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setRate: (state, action: PayloadAction<string>) => {
      state.rate = action.payload;
    },
  },
});

export const { actions: portActions } = portSlice;
export const { reducer: portReducer } = portSlice;
