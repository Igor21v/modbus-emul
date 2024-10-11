/* eslint-disable no-restricted-globals */
let port;
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
    await port.open({ baudRate: 9600 });
    needClose = false;
    postMessage({ type: 'open', state: 'OK' });
  } catch (e) {
    postMessage({ type: 'open', state: 'ERROR', data: e });
  }
}

async function close() {}

/* 
worker.onmessage = ({ data }) => {
  if (data.type === 'open' && data.state === 'OK') {
    dispatch(appStateActions.setState('Порт открыт'));
    dispatch(appStateActions.resetError());
    dispatch(
      addLog({
        msg: 'Порт открыт',
        priority: 9,
      }),
    );
  }
}; */
