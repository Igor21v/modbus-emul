import { WorkerStateType } from './types';

// Открытие порта
export default async function open(ws: WorkerStateType, props: any) {
  try {
    // @ts-ignore
    const ports = await navigator.serial.getPorts();
    ws.port = ports[0];
    await ws.port.open(props);
    ws.needClose = false;
    ws.baudRate = props.baudRate;
    postMessage({ type: 'open', state: 'OK' });
    ws.init = true;
    setTimeout(() => {
      ws.init = false;
    }, 1000);
  } catch (error) {
    postMessage({ type: 'open', state: 'ERROR', error });
  }
}
