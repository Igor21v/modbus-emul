import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface Request {
  register: number;
  quantity: number;
  content: string[];
  link: boolean;
}

export interface Slave {
  adr: string;
  requests: Record<number, Request>;
}

export type RequestState = Record<number, Slave>;

const initialState: RequestState = {};

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    addSlave: (state, action: PayloadAction<string>) => {
      const id = Date.now();
      state[id] = { requests: { [id]: { register: 1, quantity: 1, content: ['-----'], link: false } }, adr: action.payload };
    },
    addRequest: (state, action: PayloadAction<number>) => {
      const id = Date.now();
      state[action.payload].requests[id] = { register: 1, quantity: 1, content: ['-----'], link: false };
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
    changeRegister: (state, action: PayloadAction<{ slaveId: number; requestId: number; register: number }>) => {
      state[action.payload.slaveId].requests[action.payload.requestId].register = action.payload.register;
    },
    changeQuantity: (state, action: PayloadAction<{ slaveId: number; requestId: number; quantity: number }>) => {
      state[action.payload.slaveId].requests[action.payload.requestId].quantity = action.payload.quantity;
    },
  },
});

export const { actions: requestsActions } = requestsSlice;
export const { reducer: requestsReducer } = requestsSlice;
