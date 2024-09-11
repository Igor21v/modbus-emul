import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PortState {
  rate: string;
  parity: string;
  stopBit: string;
  dataBit: string;
  port: any;
}

const initialState: PortState = {
  rate: '9600',
  parity: 'none',
  stopBit: '1',
  dataBit: '8',
  port: null,
};

const portSlice = createSlice({
  name: 'port',
  initialState,
  reducers: {
    setRate: (state, action: PayloadAction<string>) => {
      state.rate = action.payload;
    },
  },
});

export const { actions: portActions } = portSlice;
export const { reducer: portReducer } = portSlice;
