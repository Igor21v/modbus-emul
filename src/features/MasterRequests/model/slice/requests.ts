import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface Request {
  register: number;
  quantity: number;
}

export interface Slave {
  adr: string;
  requests: Record<number, Request>;
}

interface ChangeAdr {
  id: number;
  adr: string;
}

export type RequestState = Record<number, Slave>;

const initialState: RequestState = {};

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    addSlave: (state, action: PayloadAction<string>) => {
      const id = Date.now();
      state[id] = { requests: { [id]: { register: 1, quantity: 1 } }, adr: action.payload };
    },
    addRequest: (state, action: PayloadAction<number>) => {
      const id = Date.now();
      state[action.payload].requests[id] = { register: 1, quantity: 1 };
    },
    delRequest: (state, action: PayloadAction<{ adress: number; reqID: number }>) => {
      delete state[action.payload.adress].requests[action.payload.reqID];
    },
    delSlave: (state, action: PayloadAction<number>) => {
      delete state[action.payload];
    },
    changeAdr: (state, action: PayloadAction<{ id: number; adr: string }>) => {
      state[action.payload.id].adr = action.payload.adr;
    },
  },
});

export const { actions: requestsActions } = requestsSlice;
export const { reducer: requestsReducer } = requestsSlice;
