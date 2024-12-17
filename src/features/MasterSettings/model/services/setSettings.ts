import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { masterSettingsActions } from '../slice/masterSettings';

interface Props {
  changeRegister?: { slaveId: number; requestId: number; register: number };
  changeQuantity?: { slaveId: number; requestId: number; quantity: number };
}

export const setSettings = createAsyncThunk<void, Props, ThunkConfig>('requests/setMasterProp', async (payload, thunkApi) => {
  const { dispatch } = thunkApi;
  const type = Object.keys(payload)[0] as keyof Props;
  const props = Object.values(payload)[0];
  switch (type) {
    case 'changeRegister':
      dispatch(masterSettingsActions.setTimeout(props));
      sendToWorker('333');
      break;
    case 'changeQuantity':
      dispatch(masterSettingsActions.setFrameDelay(props));
      sendToWorker('444');
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
