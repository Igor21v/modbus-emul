import { Data } from './types';

export const sendToWorker = (data: Data) => {
  window.portWorker.postMessage(data);
};
