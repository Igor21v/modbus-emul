export interface AddSlave {
  type: 'addSlave';
  newAdr: number;
}
export interface AddRegister {
  type: 'addRegister';
  slaveID: number;
}
export interface DelRegister {
  type: 'delRegister';
  slaveAdress: number;
  id: number;
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
  responseId: number;
  val: number;
}
export interface ChangeQuantity {
  type: 'changeQuantity';
  slaveId: number;
  responseId: number;
  val: number;
}
export interface SetContent {
  type: 'setContent';
  slaveId: number;
  responseId: number;
  register: number;
  content: number;
}
export interface SetArea {
  type: 'setArea';
  slaveId: number;
  responseId: number;
  area: number;
}
