export const sendToWorker = (type: string, props?: any) => {
  window.portWorker.postMessage({
    type,
    props,
  });
};
