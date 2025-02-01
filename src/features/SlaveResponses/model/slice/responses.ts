import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type ViewType = '10' | '2' | '16';

export interface Response {
  register: number;
  quantity: number;
  content: number[];
  view: ViewType;
  aria: number;
}

export interface Slave {
  adr: number;
  requests: Record<number, Response>;
}

export type ResponseState = Record<number, Slave>;

const initialState: ResponseState = {};

const responsesSlice = createSlice({
  name: 'responses',
  initialState,
  reducers: {
    addSlave: (state, action: PayloadAction<number>) => {
      const id = Date.now();
      state[id] = {
        requests: { [id]: { register: 1, quantity: 1, content: [0], view: '10', aria: 4 } },
        adr: action.payload,
      };
    },
    addRegister: (state, action: PayloadAction<number>) => {
      const id = Date.now();
      state[action.payload].requests[id] = {
        register: 1,
        quantity: 1,
        content: [0],
        view: '10',
        aria: 4,
      };
    },
    delRegister: (state, action: PayloadAction<{ adress: number; reqID: number }>) => {
      delete state[action.payload.adress].requests[action.payload.reqID];
    },
    delSlave: (state, action: PayloadAction<number>) => {
      delete state[action.payload];
    },
    changeAdr: (state, action: PayloadAction<{ id: number; adr: number }>) => {
      state[action.payload.id].adr = action.payload.adr;
    },
    changeRegister: (state, action: PayloadAction<{ slaveId: number; responseId: number; register: number }>) => {
      state[action.payload.slaveId].requests[action.payload.responseId].register = action.payload.register;
    },
    changeQuantity: (state, action: PayloadAction<{ slaveId: number; responseId: number; quantity: number }>) => {
      state[action.payload.slaveId].requests[action.payload.responseId].quantity = action.payload.quantity;
      state[action.payload.slaveId].requests[action.payload.responseId].content = Array(action.payload.quantity).fill(0);
    },
    setView: (state, action: PayloadAction<{ slaveId: number; responseId: number; view: ViewType }>) => {
      state[action.payload.slaveId].requests[action.payload.responseId].view = action.payload.view;
    },
    setContent: (state, action: PayloadAction<{ slaveId: number; responseId: number; register: number; content: number }>) => {
      const { payload } = action;
      state[payload.slaveId].requests[payload.responseId].content[payload.register] = payload.content;
    },
    setArea: (state, action: PayloadAction<{ slaveId: number; responseId: number; area: number }>) => {
      const { payload } = action;
      state[payload.slaveId].requests[payload.responseId].aria = payload.area;
    },
  },
});

export const { actions: responsesActions } = responsesSlice;
export const { reducer: responsesReducer } = responsesSlice;
