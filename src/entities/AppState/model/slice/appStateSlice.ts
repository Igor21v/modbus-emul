import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  content: string;
  error: boolean;
}

const initialState: AppState = {
  content: 'Настройте параметры связи и выберите порт',
  error: true,
};

const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setState: (state, action) => {
      state.content = action.payload;
    },
    setError: (state) => {
      state.error = true;
    },
    resetError: (state) => {
      state.error = false;
    },
  },
});

export const { actions: appStateActions } = appStateSlice;
export const { reducer: appStateReducer } = appStateSlice;
