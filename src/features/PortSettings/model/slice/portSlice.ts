import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { openPort } from '../services/openPort';

export interface PortState {
  baudRate: string;
  parity: string;
  stopBits: string;
  dataBits: string;
  port: any;
  error: string | undefined;
}

const initialState: PortState = {
  baudRate: '9600',
  parity: 'none',
  stopBits: '1',
  dataBits: '8',
  port: null,
  error: undefined,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(openPort.pending, (state) => {
        state.error = undefined;
        state.port = null;
      })
      .addCase(openPort.fulfilled, (state, action) => {
        state.port = action.payload;
      })
      .addCase(openPort.rejected, (state, action) => {
        state.error = action.error.message;
        console.log(action.error.message);
      });
  },
});

export const { actions: portActions } = portSlice;
export const { reducer: portReducer } = portSlice;
