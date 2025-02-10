import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { requestsActions } from '../slice/requests';
import {
  AddRequest,
  AddSlave,
  ChangeAdr,
  ChangeQuantity,
  ChangeRegister,
  DelRequest,
  DelSlave,
  SendCmdRec,
  SetContent,
  SetFunc,
  SetLoopRec,
} from '../types/actionTypes';

type Props =
  | AddSlave
  | AddRequest
  | DelRequest
  | DelSlave
  | ChangeAdr
  | ChangeRegister
  | ChangeQuantity
  | SetContent
  | SetFunc
  | SetLoopRec
  | SendCmdRec;

export const setRequest = createAsyncThunk<void, Props, ThunkConfig>('requests/setMasterProp', async (payload, thunkApi) => {
  const { dispatch } = thunkApi;
  switch (payload.type) {
    case 'addSlave':
      dispatch(requestsActions.addSlave(payload));
      sendRequest('33');
      break;
    case 'addRequest':
      dispatch(requestsActions.addRequest(payload));
      sendRequest('44');
      break;
    case 'delRequest':
      dispatch(requestsActions.delRequest(payload));
      sendRequest('55');
      break;
    case 'delSlave':
      dispatch(requestsActions.delSlave(payload));
      sendRequest('66');
      break;
    case 'changeAdr':
      dispatch(requestsActions.changeAdr(payload));
      sendRequest('99');
      break;
    case 'changeRegister':
      dispatch(requestsActions.changeRegister(payload));
      sendRequest('1');
      break;
    case 'changeQuantity':
      dispatch(requestsActions.changeQuantity(payload));
      sendRequest('3');
      break;
    case 'setContent':
      dispatch(requestsActions.setContent(payload));
      sendRequest('88');
      break;
    case 'setFunc':
      dispatch(requestsActions.setFunc(payload));
      sendRequest('34');
      break;
    case 'setLoopRec':
      dispatch(requestsActions.setLoopRec(payload));
      sendRequest('343');
      break;
    case 'sendCmdRec':
      sendRequest('33332');
      break;
  }
});

function sendRequest(data: string) {
  console.log(data);
  /*     postToWorker({type: 'setRequests',
        requests: data,})
      */
}
