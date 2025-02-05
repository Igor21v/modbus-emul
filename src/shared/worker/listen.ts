import { WorkerStateType } from './types';

// Функция прослушки порта
export default async function listen(ws: WorkerStateType) {
  let frame = '';
  let prevFrameTime = performance.now();
  let prevChankTime = performance.now();
  while (ws.port?.readable && !ws.needClose) {
    ws.reader = ws.port.readable.getReader();
    try {
      while (true) {
        const { value, done } = await ws.reader.read();
        if (done) {
          break;
        }
        /* console.log('Получен чанк ' + `${value}`); */
        if (frame === '') {
          /* console.log('Начало нового фрейма из пустого'); */
          frame = `${value}`;
          prevChankTime = performance.now();
        } else {
          const currTime = performance.now();
          const chankTime = currTime - prevChankTime;
          const maxFrameDelay = getMaxFrameDeley(`${value}`);
          /* console.log('maxFrameDelay ' + maxFrameDelay);
          console.log('chankTime ' + chankTime); */
          if (chankTime > maxFrameDelay) {
            const diffTime = Math.round((currTime - prevFrameTime) * 100) / 100;
            /* console.log('Отправка фрейма ' + frame); */
            postMessage({
              type: 'listen',
              state: 'MSG',
              payload: { msg: frame, diffTime },
            });
            frame = `${value}`;
            /*  console.log('Начало нового фрейма ' + frame); */
            prevFrameTime = performance.now();
          } else {
            frame += `,${value}`;
            /* console.log('Дополнил фрейм ' + frame); */
          }
          prevChankTime = performance.now();
        }
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

  // Максимальная задержка между символьными фреймами в одном фрейме
  function getMaxFrameDeley(msg: string) {
    let t15 = 0.75;
    if (ws.baudRate <= 19200) {
      t15 = 16500 / ws.baudRate;
    }
    const chankTime = (msg.split(',').length * 11000) / ws.baudRate;
    return chankTime + t15;
  }
}
