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
    },
    addRequest: (state, action: PayloadAction<number>) => {
      const id = Date.now();
      console.log(action.payload);
      state[action.payload][id] = { register: 1, quantity: 1 };
    },
  },
});

export const { actions: requestsActions } = requestsSlice;
export const { reducer: requestsReducer } = requestsSlice;
