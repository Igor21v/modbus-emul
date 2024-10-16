/* eslint-disable no-restricted-globals */
let port;
let reader;
let needClose = false;
let baudRate = 9600;

// Обработка получения сообщения
self.onmessage = ({ data }) => {
  if (data.type === 'open') open(data.props);
  else if (data.type === 'close') close();
  else if (data.type === 'listen') listen();
};

// Функция прослушки порта
async function listen() {
  let frame = '';
  let prevFrameTime = performance.now();
  let prevChankTime = performance.now();
  while (port?.readable && !needClose) {
    reader = port.readable.getReader();
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        console.log('Получен чанк ' + `${value}`);
        if (frame === '') {
          console.log('Начало нового фрейма из пустого');
          frame = `${value}`;
          prevChankTime = performance.now();
        } else {
          const currTime = performance.now();
          const chankTime = currTime - prevChankTime;
          const maxFrameDelay = getMaxFrameDeley(`${value}`);
          console.log('maxFrameDelay ' + maxFrameDelay);
          console.log('chankTime ' + chankTime);
          if (chankTime > maxFrameDelay) {
            const diffTime = Math.round((currTime - prevFrameTime) * 100) / 100;
            console.log('Отправка фрейма ' + frame);
            postMessage({
              type: 'listen',
              state: 'MSG',
              payload: { msg: frame, diffTime },
            });
            frame = `${value}`;
            console.log('Начало нового фрейма ' + frame);
            prevFrameTime = performance.now();
          } else {
            frame += `,${value}`;
            console.log('Дополнил фрейм ' + frame);
          }
          prevChankTime = performance.now();
        }
      }
    } catch (error) {
    } finally {
      reader.releaseLock();
    }
  }
  if (port) {
    await port.close();
    port = undefined;
  }
}

// Максимальная задержка между символьными фреймами в одном фрейме
function getMaxFrameDeley(msg) {
  let t15 = 0.75;
  if (baudRate <= 19200) {
    t15 = 16500 / baudRate;
  }
  const chankTime = (msg.split(',').length * 11000) / baudRate;
  return chankTime + t15;
}

// Открытие порта
async function open(props) {
  try {
    const ports = await navigator.serial.getPorts();
    port = ports[0];
    await port.open(props);
    needClose = false;
    baudRate = props.baudRate;
    postMessage({ type: 'open', state: 'OK' });
  } catch (error) {
    postMessage({ type: 'open', state: 'ERROR', error });
  }
}

// Закрытие порта
async function close() {
  try {
    if (port) {
      needClose = true;
      await reader?.cancel();
      // Можно закрывать порт здесь, сейчас реализовано по рекомендации из документации в listen функции
      // port.close();
    }
    postMessage({ type: 'close', state: 'OK' });
  } catch (error) {
    postMessage({ type: 'close', state: 'ERROR', error });
  }
}
