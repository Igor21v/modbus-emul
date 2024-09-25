import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { openPort } from '../services/openPort';
import { closePort } from '../services/closePort';

export interface PortState {
  baudRate: string;
  parity: string;
  stopBits: string;
  dataBits: string;
  portIsOpen: boolean;
  error: string | undefined;
  needClose: boolean;
}

const initialState: PortState = {
  baudRate: '9600',
  parity: 'none',
  stopBits: '1',
  dataBits: '8',
  portIsOpen: false,
  // Пока в резерве:
  error: undefined,
  needClose: false,
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
    needClose: (state, action: PayloadAction<boolean>) => {
      state.needClose = action.payload;
    },
    setPortOpen: (state, action: PayloadAction<boolean>) => {
      state.portIsOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(openPort.pending, (state) => {
        state.error = undefined;
        state.portIsOpen = false;
      })
      .addCase(openPort.fulfilled, (state) => {
        state.portIsOpen = true;
      })
      .addCase(openPort.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(closePort.pending, (state) => {
        state.error = undefined;
      })
      .addCase(closePort.fulfilled, (state) => {
        state.portIsOpen = false;
      })
      .addCase(closePort.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { actions: portActions } = portSlice;
export const { reducer: portReducer } = portSlice;
