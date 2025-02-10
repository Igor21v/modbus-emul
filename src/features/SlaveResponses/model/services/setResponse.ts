import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { responsesActions } from '../slice/responses';
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

type Props = AddSlave | AddRegister | DelRegister | DelSlave | ChangeAdr | ChangeRegister | ChangeQuantity | SetContent | SetArea;

export const setResponse = createAsyncThunk<void, Props, ThunkConfig>('requests/setMasterProp', async (payload, thunkApi) => {
  const { dispatch } = thunkApi;
  switch (payload.type) {
    case 'addSlave':
      dispatch(responsesActions.addSlave(payload));
      sendRequest('33');
      break;
    case 'addRegister':
      dispatch(responsesActions.addRegister(payload));
      sendRequest('44');
      break;
    case 'delRegister':
      dispatch(responsesActions.delRegister(payload));
      sendRequest('55');
      break;
    case 'delSlave':
      dispatch(responsesActions.delSlave(payload));
      sendRequest('66');
      break;
    case 'changeAdr':
      dispatch(responsesActions.changeAdr(payload));
      sendRequest('99');
      break;
    case 'changeRegister':
      dispatch(responsesActions.changeRegister(payload));
      sendRequest('1');
      break;
    case 'changeQuantity':
      dispatch(responsesActions.changeQuantity(payload));
      sendRequest('3');
      break;
    case 'setContent':
      dispatch(responsesActions.setContent(payload));
      sendRequest('88');
      break;
    case 'setArea':
      dispatch(responsesActions.setArea(payload));
      sendRequest('34');
      break;
  }
});

function sendRequest(data: string) {
  console.log(data);
  /*     postToWorker({type: 'setRequests',
        requests: data,})
      */
}
