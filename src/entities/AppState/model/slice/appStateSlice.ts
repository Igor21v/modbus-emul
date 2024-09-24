import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  content: string;
  error: boolean;
  expandedLog: boolean;
}

// @ts-ignore
let initContent = navigator.serial
  ? 'Подключите преобразователь, настройте параметры связи и выберите порт'
  : 'Ваш браузер не поддреживает работу с COM-портами, попробуйте открыть приложение в другом';

const initialState: AppState = {
  content: initContent,
  error: true,
  expandedLog: false,
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
    expandedLog: (state, action) => {
      state.expandedLog = action.payload;
    },
  },
});

export const { actions: appStateActions } = appStateSlice;
export const { reducer: appStateReducer } = appStateSlice;
