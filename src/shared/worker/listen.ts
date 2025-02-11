import { WorkerStateType } from './types';

// Функция прослушки порта
export default async function listen(ws: WorkerStateType) {
  let frame = '';
  let prevFrameTime = performance.now();
  let prevChunkTime = performance.now();
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
        } else {
          const currTime = performance.now();
          const chunkTime = currTime - prevChunkTime;
          const maxFrameDelay = getMaxFrameDeley(`${value}`);
          console.log('maxFrameDelay ' + maxFrameDelay);
          console.log('chunkTime ' + chunkTime);
          if (chunkTime > maxFrameDelay) {
            const diffTime = Math.round((currTime - prevFrameTime) * 100) / 100;
            /* console.log('Отправка фрейма ' + frame); */
            if (!ws.init) {
              postMessage({
                type: 'listen',
                state: 'MSG',
                payload: { msg: frame, diffTime },
              });
            }
            frame = `${value}`;
            /* console.log('Начало нового фрейма ' + frame); */
            prevFrameTime = performance.now();
          } else {
            frame += `,${value}`;
            /* console.log('Дополнил фрейм ' + frame); */
          }
        }
        prevChunkTime = performance.now();
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
    // время передачи 1 симвала (из 11 бит)
    let charTime = (11 / ws.baudRate) * 10;
    // В соответсвии со спецификацией modbus если скорость более 19200 время t1,5 и t3,5 фиксировано
    let t15 = 0.75;
    let t35 = 1.75;
    if (ws.baudRate <= 19200) {
      t15 = charTime * 1.5;
      t35 = charTime * 3.5;
    }
    charTime += t15;
    const numberChars = msg.split(',').length;
    const chunkTime = numberChars * charTime + t35;
    return chunkTime;
  }
}
