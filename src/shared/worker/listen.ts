import { WorkerStateType } from './types';

// Функция прослушки порта
export default async function listen(ws: WorkerStateType) {
  let frame = '';
  let prevFrameTime = performance.now();
  let timer;
  // 11 бит в символе модбас, 256 - максимальое количество символов в фрейме
  let maxFrameTime = 256 * (11 / ws.baudRate) * 1000;
  // 1.5 - время между символами согласно спецификации, при скорости более 19200 задержка между символами фиксированая
  if (ws.baudRate <= 19200) maxFrameTime *= 1.5;
  else maxFrameTime += 256 * 0.75;

  console.log('maxFrame ' + maxFrameTime);
  while (ws.port?.readable && !ws.needClose) {
    ws.reader = ws.port.readable.getReader();
    try {
      while (true) {
        const { value, done } = await ws.reader.read();
        if (done) {
          console.log('trap ');
          break;
        }
        if (frame !== '') frame += ',';
        frame += `${value}`;

        clearTimeout(timer);
        timer = setTimeout(async () => {
          const currTime = performance.now();
          const diffTime = Math.round((currTime - prevFrameTime) * 100) / 100;
          if (!ws.init) {
            postMessage({
              type: 'listen',
              state: 'MSG',
              payload: { msg: frame, diffTime },
            });
          }
          prevFrameTime = performance.now();
          frame = '';
        }, maxFrameTime);
      }
    } catch (error) {
    } finally {
      ws.reader.releaseLock();
    }
  }
  if (ws.port) {
    await ws.port.close();
    ws.port = undefined;
  }
}
