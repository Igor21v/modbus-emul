export interface AddSlave {
  type: 'addSlave';
  newAdr: number;
}
export interface AddRequest {
  type: 'addRequest';
  slaveID: number;
}
export interface DelRequest {
  type: 'delRequest';
  slaveAdress: number;
  requestId: number;
}
export interface DelSlave {
  type: 'delSlave';
  slaveID: number;
}
export interface ChangeAdr {
  type: 'changeAdr';
  slaveID: number;
  adr: number;
}
export interface ChangeRegister {
  type: 'changeRegister';
  slaveId: number;
  requestId: number;
  val: number;
}
export interface ChangeQuantity {
  type: 'changeQuantity';
  slaveId: number;
  requestId: number;
  val: number;
}
export interface SetContent {
  type: 'setContent';
  slaveId: number;
  requestId: number;
  register: number;
  content: number;
}
export interface SetFunc {
  type: 'setFunc';
  slaveId: number;
  requestId: number;
  func: number;
}
export interface SetLoopRec {
  type: 'setLoopRec';
  slaveId: number;
  requestId: number;
  loopRec: boolean;
}
export interface SendCmdRec {
  type: 'sendCmdRec';
  slaveId: number;
  requestId: number;
}
