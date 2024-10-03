export interface LogItemType {
  num: number;
  date: string;
  msg: string;
  diffTime?: number;
  priority?: number;
}

export interface LogState {
  log: LogItemType[];
  activePage: number;
}

export interface LogItemBuffer {
  index: number;
  item: LogItemType;
}

export type LogBuffer = LogItemBuffer[];
