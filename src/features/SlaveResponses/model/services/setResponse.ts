import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { responsesActions } from '../slice/responses';

interface Props {
  addSlave?: number;
  addRequest?: number;
  delRequest?: { adress: number; reqID: number };
  delSlave?: number;
  changeAdr?: { id: number; adr: number };
  changeRegister?: { slaveId: number; requestId: number; register: number };
  changeQuantity?: { slaveId: number; requestId: number; quantity: number };
  setContent?: { slaveId: number; requestId: number; register: number; content: number };
  setFunc?: { slaveId: number; requestId: number; func: number };
  sendCmdRec?: { slaveId: number; requestId: number };
}

export const setRequest = createAsyncThunk<void, Props, ThunkConfig>('requests/setMasterProp', async (payload, thunkApi) => {
  const { dispatch } = thunkApi;
  const type = Object.keys(payload)[0] as keyof Props;
  const props = Object.values(payload)[0];
  switch (type) {
    case 'addSlave':
      dispatch(responsesActions.addSlave(props));
      sendRequest('33');
      break;
    case 'addRequest':
      dispatch(responsesActions.addRequest(props));
      sendRequest('44');
      break;
    case 'delRequest':
      dispatch(responsesActions.delRequest(props));
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
    case 'setFunc':
      dispatch(responsesActions.setFunc(props));
      sendRequest('34');
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
