import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface SlaveSettingsState {
  sendError?: boolean;
  frameDelay?: number;
}

const initialState: SlaveSettingsState = { frameDelay: 4, sendError: false };

const slaveSettings = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    setSendError: (state, action: PayloadAction<boolean>) => {
      state.sendError = action.payload;
    },
    setFrameDelay: (state, action: PayloadAction<number>) => {
      state.frameDelay = action.payload;
    },
  },
});

export const { actions: slaveSettingsActions } = slaveSettings;
export const { reducer: slaveSettingsReducer } = slaveSettings;
