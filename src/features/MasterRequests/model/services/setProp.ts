import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { requestsActions } from '../slice/requests';

interface Props {
  addSlave?: number;
  addRequest?: number;
  delRequest?: { adress: number; reqID: number };
  delSlave?: number;
  changeAdr?: { id: number; adr: number };
  changeRegister?: { slaveId: number; requestId: number; register: number };
  changeQuantity?: { slaveId: number; requestId: number; quantity: number };
  setContent?: { slaveId: number; requestId: number; register: number; content: number };
}

export const setMasterProp = createAsyncThunk<void, Props, ThunkConfig>('requests/setMasterProp', async (payload, thunkApi) => {
  const { dispatch } = thunkApi;
  const type = Object.keys(payload)[0] as keyof Props;
  const props = Object.values(payload)[0];
  switch (type) {
    case 'addSlave':
      dispatch(requestsActions.addSlave(props));
      sendRequest('33');
      break;
    case 'addRequest':
      dispatch(requestsActions.addRequest(props));
      sendRequest('44');
      break;
    case 'delRequest':
      dispatch(requestsActions.delRequest(props));
      sendRequest('55');
      break;
    case 'delSlave':
      dispatch(requestsActions.delSlave(props));
      sendRequest('66');
      break;
    case 'changeAdr':
      dispatch(requestsActions.changeAdr(props));
      sendRequest('99');
      break;
    case 'changeRegister':
      dispatch(requestsActions.changeRegister(props));
      sendRequest('1');
      break;
    case 'changeQuantity':
      dispatch(requestsActions.changeQuantity(props));
      sendRequest('3');
      break;
    case 'setContent':
      dispatch(requestsActions.setContent(props));
      sendRequest('88');
      break;
  }
});

function sendRequest(data: string) {
  console.log(data);
  /*     postToWorker({type: 'setRequests',
        requests: data,})
      */
}
