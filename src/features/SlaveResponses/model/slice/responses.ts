import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type ViewType = '10' | '2' | '16';

export interface Request {
  register: number;
  quantity: number;
  content: number[];
  link: boolean;
  view: ViewType;
  func: number;
  loopRec: boolean;
}

export interface Slave {
  adr: number;
  requests: Record<number, Request>;
}

export type RequestState = Record<number, Slave>;

const initialState: RequestState = {};

const responsesSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    addSlave: (state, action: PayloadAction<number>) => {
      const id = Date.now();
      state[id] = {
        requests: { [id]: { register: 1, quantity: 1, content: [0], link: false, view: '10', func: 3, loopRec: true } },
        adr: action.payload,
      };
    },
    addRequest: (state, action: PayloadAction<number>) => {
      const id = Date.now();
      state[action.payload].requests[id] = {
        register: 1,
        quantity: 1,
        content: [0],
        link: false,
        view: '10',
        func: 3,
        loopRec: true,
      };
    },
    delRequest: (state, action: PayloadAction<{ adress: number; reqID: number }>) => {
      delete state[action.payload.adress].requests[action.payload.reqID];
    },
    delSlave: (state, action: PayloadAction<number>) => {
      delete state[action.payload];
    },
    changeAdr: (state, action: PayloadAction<{ id: number; adr: number }>) => {
      state[action.payload.id].adr = action.payload.adr;
    },
    changeRegister: (state, action: PayloadAction<{ slaveId: number; requestId: number; register: number }>) => {
      state[action.payload.slaveId].requests[action.payload.requestId].register = action.payload.register;
    },
    changeQuantity: (state, action: PayloadAction<{ slaveId: number; requestId: number; quantity: number }>) => {
      state[action.payload.slaveId].requests[action.payload.requestId].quantity = action.payload.quantity;
      state[action.payload.slaveId].requests[action.payload.requestId].content = Array(action.payload.quantity).fill(0);
    },
    setLink: (state, action: PayloadAction<{ slaveId: number; requestId: number; link: boolean }>) => {
      state[action.payload.slaveId].requests[action.payload.requestId].link = action.payload.link;
    },
    setView: (state, action: PayloadAction<{ slaveId: number; requestId: number; view: ViewType }>) => {
      state[action.payload.slaveId].requests[action.payload.requestId].view = action.payload.view;
    },
    setContent: (state, action: PayloadAction<{ slaveId: number; requestId: number; register: number; content: number }>) => {
      const { payload } = action;
      state[payload.slaveId].requests[payload.requestId].content[payload.register] = payload.content;
    },
    setFunc: (state, action: PayloadAction<{ slaveId: number; requestId: number; func: number }>) => {
      const { payload } = action;
      state[payload.slaveId].requests[payload.requestId].func = payload.func;
    },
    setLoopRec: (state, action: PayloadAction<{ slaveId: number; requestId: number; loopRec: boolean }>) => {
      const { payload } = action;
      state[payload.slaveId].requests[payload.requestId].loopRec = payload.loopRec;
    },
  },
});

export const { actions: responsesActions } = responsesSlice;
export const { reducer: responsesReducer } = responsesSlice;
