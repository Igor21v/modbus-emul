import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PortState {
  baudRate: string;
  parity: string;
  stopBits: string;
  dataBits: string;
  port: any;
}

const initialState: PortState = {
  baudRate: '9600',
  parity: 'none',
  stopBits: '1',
  dataBits: '8',
  port: null,
};

const portSlice = createSlice({
  name: 'port',
  initialState,
  reducers: {
    setRate: (state, action: PayloadAction<string>) => {
      state.baudRate = action.payload;
    },
    setDataBit: (state, action: PayloadAction<string>) => {
      state.dataBits = action.payload;
    },
    setParity: (state, action: PayloadAction<string>) => {
      state.parity = action.payload;
    },
    setStopBit: (state, action: PayloadAction<string>) => {
      state.stopBits = action.payload;
    },
    setPort: (state, action: PayloadAction<any>) => {
      state.port = action.payload;
    },
  },
});

export const { actions: portActions } = portSlice;
export const { reducer: portReducer } = portSlice;
