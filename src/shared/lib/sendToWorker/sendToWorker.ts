export const postToWorker = (type: string, data: any) => {
  window.portWorker.postMessage({
    type,
    data,
  });
};
