import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { masterSettingsActions } from '../slice/masterSettings';

interface Props {
  timeout?: number;
  delay?: number;
}

export const setSettings = createAsyncThunk<void, Props, ThunkConfig>('requests/setMasterProp', async (payload, thunkApi) => {
  const { dispatch } = thunkApi;
  const type = Object.keys(payload)[0] as keyof Props;
  const props = Object.values(payload)[0];
  switch (type) {
    case 'timeout':
      dispatch(masterSettingsActions.setTimeout(props));
      sendToWorker('333');
      break;
    case 'delay':
      dispatch(masterSettingsActions.setFrameDelay(props));
      sendToWorker('444');
      break;
  }
});

function sendToWorker(data: string) {
  console.log(data);
  /* postToWorker({type: 'setRequests',
        requests: data,})*/
}
