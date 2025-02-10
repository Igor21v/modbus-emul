import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
  AddRequest,
  AddSlave,
  ChangeAdr,
  ChangeQuantity,
  ChangeRegister,
  DelRequest,
  DelSlave,
  SetContent,
  SetFunc,
  SetLoopRec,
} from '../types/actionTypes';

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

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    addSlave: (state, action: PayloadAction<AddSlave>) => {
      const id = Date.now();
      state[id] = {
        requests: { [id]: { register: 1, quantity: 1, content: [0], link: false, view: '10', func: 3, loopRec: true } },
        adr: action.payload.newAdr,
      };
    },
    addRequest: (state, action: PayloadAction<AddRequest>) => {
      const id = Date.now();
      state[action.payload.slaveID].requests[id] = {
        register: 1,
        quantity: 1,
        content: [0],
        link: false,
        view: '10',
        func: 3,
        loopRec: true,
      };
    },
    delRequest: (state, action: PayloadAction<DelRequest>) => {
      delete state[action.payload.slaveAdress].requests[action.payload.requestId];
    },
    delSlave: (state, action: PayloadAction<DelSlave>) => {
      delete state[action.payload.slaveID];
    },
    changeAdr: (state, action: PayloadAction<ChangeAdr>) => {
      state[action.payload.slaveID].adr = action.payload.adr;
    },
    changeRegister: (state, action: PayloadAction<ChangeRegister>) => {
      state[action.payload.slaveId].requests[action.payload.requestId].register = action.payload.val;
    },
    changeQuantity: (state, action: PayloadAction<ChangeQuantity>) => {
      state[action.payload.slaveId].requests[action.payload.requestId].quantity = action.payload.val;
      state[action.payload.slaveId].requests[action.payload.requestId].content = Array(action.payload.val).fill(0);
    },
    setLink: (state, action: PayloadAction<{ slaveId: number; requestId: number; link: boolean }>) => {
      state[action.payload.slaveId].requests[action.payload.requestId].link = action.payload.link;
    },
    setView: (state, action: PayloadAction<{ requestId: number; slaveId: number; view: ViewType }>) => {
      state[action.payload.slaveId].requests[action.payload.requestId].view = action.payload.view;
    },
    setContent: (state, action: PayloadAction<SetContent>) => {
      const { payload } = action;
      state[payload.slaveId].requests[payload.requestId].content[payload.register] = payload.content;
    },
    setFunc: (state, action: PayloadAction<SetFunc>) => {
      const { payload } = action;
      state[payload.slaveId].requests[payload.requestId].func = payload.func;
    },
    setLoopRec: (state, action: PayloadAction<SetLoopRec>) => {
      const { payload } = action;
      state[payload.slaveId].requests[payload.requestId].loopRec = payload.loopRec;
    },
  },
});

export const { actions: requestsActions } = requestsSlice;
export const { reducer: requestsReducer } = requestsSlice;
