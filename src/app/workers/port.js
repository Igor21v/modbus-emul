/* eslint-disable no-restricted-globals */
let port;
let reader;
let needClose = false;

self.onmessage = ({ data }) => {
  if (data.type === 'open') open(data.props);
  else if (data.type === 'close') close();
  else if (data.type === 'listen') listen();
};

async function listen() {}

async function open(props) {
  try {
    const ports = await navigator.serial.getPorts();
    port = ports[0];
    await port.open(props);
    needClose = false;
    postMessage({ type: 'open', state: 'OK' });
  } catch (e) {
    postMessage({ type: 'open', state: 'ERROR', data: e });
  }
}

async function close() {
  try {
    if (port) {
      needClose = true;
      await reader?.cancel();
      // Можно закрывать порт здесь, сейчас реализовано по рекомендации из документации в listen функции
      // port.close();
    }
    postMessage({ type: 'close', state: 'OK' });
  } catch (e) {
    postMessage({ type: 'close', state: 'ERROR', data: e });
  }
}
