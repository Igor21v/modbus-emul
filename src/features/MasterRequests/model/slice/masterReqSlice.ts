import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface Request {
  register: number;
  quantity: number;
}

export interface OneRequest {
  adress: number;
  request: Request;
}

export type RequestState = Record<number, Record<number, Request>>;

const initialState: RequestState = {};

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    addSlave: (state, action: PayloadAction<number>) => {
      const id = Date.now();
      state[action.payload] = { [id]: { register: 1, quantity: 1 } };
      saveData('33');
    },
    addRequest: (state, action: PayloadAction<number>) => {
      const id = Date.now();
      state[action.payload][id] = { register: 1, quantity: 1 };
      saveData('44');
    },
    delRequest: (state, action: PayloadAction<{ adress: number; reqID: number }>) => {
      delete state[action.payload.adress][action.payload.reqID];
      saveData('44');
    },
  },
});

function saveData(data: string) {
  console.log(data);
  // сделать дебаунс или тротлинг
  /* window.portWorker.postMessage({
        type: 'setRequests',
        requests: data,
      }); */
}

export const { actions: requestsActions } = requestsSlice;
export const { reducer: requestsReducer } = requestsSlice;
