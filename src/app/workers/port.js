/* eslint-disable no-restricted-globals */
let port;
let reader;
let needClose = false;

self.onmessage = ({ data }) => {
  if (data.type === 'open') open(data.props);
  else if (data.type === 'close') close();
  else if (data.type === 'listen') listen();
};

async function listen() {
  while (port?.readable && !needClose) {
    let prevTime = Date.now();
    /*    if (!port.readable.locked) { */
    reader = port.readable.getReader();

    console.log(port.readable);

    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        const currTime = Date.now();
        const diffTime = currTime - prevTime;
        prevTime = currTime;
        postMessage({
          type: 'listen',
          state: 'MSG',
          payload: { msg: `${value}`, diffTime },
        });
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

async function open(props) {
  try {
    const ports = await navigator.serial.getPorts();
    port = ports[0];
    await port.open(props);
    needClose = false;
    postMessage({ type: 'open', state: 'OK' });
  } catch (error) {
    postMessage({ type: 'open', state: 'ERROR', error });
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
  } catch (error) {
    postMessage({ type: 'close', state: 'ERROR', error });
  }
}
