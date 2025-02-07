import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { masterSettingsActions } from '../slice/masterSettings';

interface Timeout {
  type: 'timeout';
  timeout: number;
}
interface Delay {
  type: 'delay';
  delay: number;
}
type Props = Timeout | Delay;

export const setSettings = createAsyncThunk<void, Props, ThunkConfig>('requests/setMasterProp', async (payload, thunkApi) => {
  const { dispatch } = thunkApi;
  switch (payload.type) {
    case 'timeout':
      dispatch(masterSettingsActions.setTimeout(payload.timeout));
      sendToWorker('333');
      break;
    case 'delay':
      dispatch(masterSettingsActions.setFrameDelay(payload.delay));
      sendToWorker('444');
      break;
  }
});

function sendToWorker(data: string) {
  console.log(data);
  /* postToWorker({type: 'setRequests',
        requests: data,})*/
}
