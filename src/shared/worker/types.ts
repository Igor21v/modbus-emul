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

interface MasterType {
  type: 'master';
}

interface SlaveType {
  type: 'slave';
}

export type Data = CloseType | OpenType | ListenType | MasterType | SlaveType;

export interface WorkerStateType {
  port: any;
  reader: any;
  needClose: boolean;
  baudRate: number;
}
