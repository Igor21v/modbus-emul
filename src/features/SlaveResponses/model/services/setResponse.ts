import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { responsesActions } from '../slice/responses';

interface AddSlave {
  type: 'addSlave';
  adrSlave: number;
}
interface AddRegister {
  type: 'addRegister';
  adrRegister: number;
}
interface DelRegister {
  type: 'delRegister';
  adress: number;
  reqID: number;
}
interface DelSlave {
  type: 'delSlave';
  adrSlave: number;
}
interface ChangeAdr {
  type: 'changeAdr';
  id: number;
  adr: number;
}
interface ChangeRegister {
  type: 'changeRegister';
  slaveId: number;
  responseId: number;
  register: number;
}
interface ChangeQuantity {
  type: 'changeQuantity';
  slaveId: number;
  responseId: number;
  quantity: number;
}
interface SetContent {
  type: 'setContent';
  slaveId: number;
  responseId: number;
  register: number;
  content: number;
}
interface SetArea {
  type: 'setArea';
  slaveId: number;
  responseId: number;
  area: number;
}

type Props = AddSlave | AddRegister | DelRegister | DelSlave | ChangeAdr | ChangeRegister | ChangeQuantity | SetContent | SetArea;

export const setResponse = createAsyncThunk<void, Props, ThunkConfig>('requests/setMasterProp', async (payload, thunkApi) => {
  const { dispatch } = thunkApi;
  switch (payload.type) {
    case 'addSlave':
      dispatch(responsesActions.addSlave(payload.adrSlave));
      sendRequest('33');
      break;
    case 'addRegister':
      dispatch(responsesActions.addRegister(payload.adrRegister));
      sendRequest('44');
      break;
    case 'delRegister':
      {
        const { adress, reqID } = payload;
        dispatch(responsesActions.delRegister({ adress, reqID }));
        sendRequest('55');
      }
      break;
    case 'delSlave':
      dispatch(responsesActions.delSlave(payload.adrSlave));
      sendRequest('66');
      break;
    case 'changeAdr':
      {
        const { adr, id } = payload;
        dispatch(responsesActions.changeAdr({ adr, id }));
        sendRequest('99');
      }
      break;
    case 'changeRegister':
      {
        const { register, responseId, slaveId } = payload;
        dispatch(responsesActions.changeRegister({ register, responseId, slaveId }));
        sendRequest('1');
      }
      break;
    case 'changeQuantity':
      {
        const { quantity, responseId, slaveId } = payload;
        dispatch(responsesActions.changeQuantity({ quantity, responseId, slaveId }));
        sendRequest('3');
      }
      break;
    case 'setContent':
      {
        const { content, register, responseId, slaveId } = payload;
        dispatch(responsesActions.setContent({ content, register, responseId, slaveId }));
        sendRequest('88');
      }
      break;
    case 'setArea':
      {
        const { area, responseId, slaveId } = payload;
        dispatch(responsesActions.setArea({ area, responseId, slaveId }));
        sendRequest('34');
      }
      break;
  }
});

function sendRequest(data: string) {
  console.log(data);
  /*     postToWorker({type: 'setRequests',
        requests: data,})
      */
}
