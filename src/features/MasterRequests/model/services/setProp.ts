import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { requestsActions } from '../slice/requests';

interface Props {
  addSlave?: string;
  addRequest?: number;
  delRequest?: { adress: number; reqID: number };
  delSlave?: number;
  changeAdr?: { id: number; adr: string };
}
/* interface Props {
  type: PropNames;
  props: any;
} */

export const setMasterProp = createAsyncThunk<void, Props, ThunkConfig>('requests/setMasterProp', async (payload, thunkApi) => {
  const { dispatch } = thunkApi;
  /* const { props, type } = payload; */
  const type = Object.keys(payload)[0] as keyof Props;
  const props = Object.values(payload)[0];
  switch (type) {
    case 'addSlave':
      dispatch(requestsActions.addSlave(props));
      sendToWorker('33');
      break;
    case 'addRequest':
      dispatch(requestsActions.addRequest(props));
      sendToWorker('44');
      break;
    case 'delRequest':
      dispatch(requestsActions.delRequest(props));
      sendToWorker('55');
      break;
    case 'delSlave':
      dispatch(requestsActions.delSlave(props));
      sendToWorker('66');
      break;
    case 'changeAdr':
      dispatch(requestsActions.changeAdr(props));
      sendToWorker('99');
      break;
  }
});

function sendToWorker(data: string) {
  console.log(data);
  // сделать дебаунс или тротлинг
  /* window.portWorker.postMessage({
        type: 'setRequests',
        requests: data,
      }); */
}
