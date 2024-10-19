import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { masterReq } from '../services/masterReq';

export interface Request {
  register: number;
  quantity: number;
}

export interface RequestState {
  requests: Request[];
}

const initialState: RequestState = {
  requests: [],
};

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    setRequests: (state, action: PayloadAction<Request[]>) => {
      state.requests = action.payload;
    },
  },
});

export const { actions: requestsActions } = requestsSlice;
export const { reducer: requestsReducer } = requestsSlice;
