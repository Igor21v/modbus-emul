import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { appStateActions } from 'entities/AppState';
import { addLog } from 'entities/Log/model/services/addLog';
import { Request, requestsActions } from '../slice/masterReqSlice';

export const masterReq = createAsyncThunk<void, Request[], ThunkConfig>(
  'requests/setRequests',
  async (payload, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    dispatch(requestsActions.setRequests(payload));
    // сделать дебаунс или тротлинг
    window.portWorker.postMessage({
      type: 'setRequests',
      requests: payload,
    });
  },
);
