import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface MasterSettingsState {
  timeout?: number;
  frameDelay?: number;
}

const initialState: MasterSettingsState = { frameDelay: 4, timeout: 500 };

const masterSettings = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    setTimeout: (state, action: PayloadAction<number>) => {
      state.timeout = action.payload;
    },
    setFrameDelay: (state, action: PayloadAction<number>) => {
      state.frameDelay = action.payload;
    },
  },
});

export const { actions: masterSettingsActions } = masterSettings;
export const { reducer: masterSettingsReducer } = masterSettings;
