import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { responsesActions } from '../slice/responses';

interface Props {
  addSlave?: number;
  addRegister?: number;
  delRegister?: { adress: number; reqID: number };
  delSlave?: number;
  changeAdr?: { id: number; adr: number };
  changeRegister?: { slaveId: number; responseId: number; register: number };
  changeQuantity?: { slaveId: number; responseId: number; quantity: number };
  setContent?: { slaveId: number; responseId: number; register: number; content: number };
  setArea?: { slaveId: number; responseId: number; area: number };
}

export const setResponse = createAsyncThunk<void, Props, ThunkConfig>('requests/setMasterProp', async (payload, thunkApi) => {
  const { dispatch } = thunkApi;
  const type = Object.keys(payload)[0] as keyof Props;
  const props = Object.values(payload)[0];
  switch (type) {
    case 'addSlave':
      dispatch(responsesActions.addSlave(props));
      sendRequest('33');
      break;
    case 'addRegister':
      dispatch(responsesActions.addRegister(props));
      sendRequest('44');
      break;
    case 'delRegister':
      dispatch(responsesActions.delRegister(props));
      sendRequest('55');
      break;
    case 'delSlave':
      dispatch(responsesActions.delSlave(props));
      sendRequest('66');
      break;
    case 'changeAdr':
      dispatch(responsesActions.changeAdr(props));
      sendRequest('99');
      break;
    case 'changeRegister':
      dispatch(responsesActions.changeRegister(props));
      sendRequest('1');
      break;
    case 'changeQuantity':
      dispatch(responsesActions.changeQuantity(props));
      sendRequest('3');
      break;
    case 'setContent':
      dispatch(responsesActions.setContent(props));
      sendRequest('88');
      break;
    case 'setArea':
      dispatch(responsesActions.setArea(props));
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
