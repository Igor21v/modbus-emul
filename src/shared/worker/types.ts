interface OpenType {
  type: 'open';
  props: any;
}

interface CloseType {
  type: 'close';
}

interface ListenType {
  type: 'listen';
}

export type Data = CloseType | OpenType | ListenType;

export interface WorkerStateType {
  port: any;
  reader: any;
  needClose: boolean;
  baudRate: number;
}
