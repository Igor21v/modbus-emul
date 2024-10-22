import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { OneRequest, requestsActions } from '../slice/masterReqSlice';

export const addSlave = createAsyncThunk<void, number, ThunkConfig>(
  'requests/addSlave',
  async (payload, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    dispatch(requestsActions.addSlave(payload));
    // сделать дебаунс или тротлинг
    window.portWorker.postMessage({
      type: 'setRequests',
      requests: payload,
    });
  },
);

export const addRequest = createAsyncThunk<void, number, ThunkConfig>(
  'requests/addRequest',
  async (payload, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    dispatch(requestsActions.addRequest(payload));
    // сделать дебаунс или тротлинг
    window.portWorker.postMessage({
      type: 'setRequests',
      requests: payload,
    });
  },
);
