import { WorkerStateType } from './types';

// Закрытие порта
export default async function close(ws: WorkerStateType) {
  try {
    if (ws.port) {
      ws.needClose = true;
      await ws.reader?.cancel();
      // Можно закрывать порт здесь, сейчас реализовано по рекомендации из документации в listen функции
      // port.close();
    }
    postMessage({ type: 'close', state: 'OK' });
  } catch (error) {
    postMessage({ type: 'close', state: 'ERROR', error });
  }
}
