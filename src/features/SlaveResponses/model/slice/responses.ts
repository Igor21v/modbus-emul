import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
  AddRegister,
  AddSlave,
  ChangeAdr,
  ChangeQuantity,
  ChangeRegister,
  DelRegister,
  DelSlave,
  SetArea,
  SetContent,
} from '../types/actionTypes';

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
    addSlave: (state, action: PayloadAction<AddSlave>) => {
      const id = Date.now();
      state[id] = {
        requests: { [id]: { register: 1, quantity: 1, content: [0], view: '10', aria: 4 } },
        adr: action.payload.newAdr,
      };
    },
    addRegister: (state, action: PayloadAction<AddRegister>) => {
      const id = Date.now();
      state[action.payload.slaveID].requests[id] = {
        register: 1,
        quantity: 1,
        content: [0],
        view: '10',
        aria: 4,
      };
    },
    delRegister: (state, action: PayloadAction<DelRegister>) => {
      delete state[action.payload.slaveAdress].requests[action.payload.id];
    },
    delSlave: (state, action: PayloadAction<DelSlave>) => {
      delete state[action.payload.slaveID];
    },
    changeAdr: (state, action: PayloadAction<ChangeAdr>) => {
      state[action.payload.slaveID].adr = action.payload.adr;
    },
    changeRegister: (state, action: PayloadAction<ChangeRegister>) => {
      state[action.payload.slaveId].requests[action.payload.responseId].register = action.payload.val;
    },
    changeQuantity: (state, action: PayloadAction<ChangeQuantity>) => {
      state[action.payload.slaveId].requests[action.payload.responseId].quantity = action.payload.val;
      state[action.payload.slaveId].requests[action.payload.responseId].content = Array(action.payload.val).fill(0);
    },
    setView: (state, action: PayloadAction<{ slaveId: number; responseId: number; view: ViewType }>) => {
      state[action.payload.slaveId].requests[action.payload.responseId].view = action.payload.view;
    },
    setContent: (state, action: PayloadAction<SetContent>) => {
      const { payload } = action;
      state[payload.slaveId].requests[payload.responseId].content[payload.register] = payload.content;
    },
    setArea: (state, action: PayloadAction<SetArea>) => {
      const { payload } = action;
      state[payload.slaveId].requests[payload.responseId].aria = payload.area;
    },
  },
});

export const { actions: responsesActions } = responsesSlice;
export const { reducer: responsesReducer } = responsesSlice;
