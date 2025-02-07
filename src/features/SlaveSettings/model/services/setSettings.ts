import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { slaveSettingsActions } from '../slice/slaveSettings';

interface Delay {
  type: 'delay';
  delay: number;
}
interface SendError {
  type: 'sendError';
  sendError: boolean;
}
type Props = Delay | SendError;

export const setSettings = createAsyncThunk<void, Props, ThunkConfig>('requests/setMasterProp', async (payload, thunkApi) => {
  const { dispatch } = thunkApi;
  switch (payload.type) {
    case 'sendError':
      dispatch(slaveSettingsActions.setSendError(payload.sendError));
      sendToWorker('333');
      break;
    case 'delay':
      dispatch(slaveSettingsActions.setFrameDelay(payload.delay));
      sendToWorker('444');
      break;
  }
});

function sendToWorker(data: string) {
  console.log(data);
  /* postToWorker({type: 'setRequests',
        requests: data,})*/
}
