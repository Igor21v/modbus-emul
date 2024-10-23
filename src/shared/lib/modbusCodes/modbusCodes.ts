const mapFC: { [key: string]: string } = {
  '1': 'Чтение DO	(Read Coil Status)',
  '2': 'Чтение DI	(Read Input Status)',
  '3': 'Чтение AO	(Read Holding Registers)',
  '4': 'Чтение AI	(Read Input Registers)',
  '5': 'Запись одного DO	(Force Single Coil)',
  '6': 'Запись одного AO	(Preset Single Register)',
  '15': 'Запись нескольких DO	(Force Multiple Coils)',
  '16': 'Запись нескольких AO (Preset Multiple Registers)',
  '129 ': 'Ошибка чтения DO',
  '130': 'Ошибка чтения DI',
  '131': 'Ошибка чтение AO',
  '132': 'Ошибка чтение AI',
  '133': 'Ошибка записи одного DO',
  '134': 'Ошибка записи одного AO',
  '143': 'Ошибка записи нескольких DO',
  '144': 'Ошибка записи нескольких AO',
};

const mapError: { [key: string]: string } = {
  '00': 'Тесе Принятый код функции не может быть обработан.',
  '01': 'Принятый код функции не может быть обработан.',
  '02': 'Адрес данных, указанный в запросе, недоступен.',
  '03': 'Значение, содержащееся в поле данных запроса, является недопустимой величиной.',
  '04': 'Невосстанавливаемая ошибка имела место, пока ведомое устройство пыталось выполнить затребованное действие.',
  '05': 'Ведомое устройство приняло запрос и обрабатывает его, но это требует много времени. Этот ответ предохраняет ведущее устройство от генерации ошибки тайм-аута.',
  '06': 'Ведомое устройство занято обработкой команды. Ведущее устройство должно повторить сообщение позже, когда ведомое освободится.',
  '07': 'Ведомое устройство не может выполнить программную функцию, заданную в запросе. ',
  '08': 'Ведомое устройство при чтении расширенной памяти обнаружило ошибку паритета. Ведущее устройство может повторить запрос, но обычно в таких случаях требуется ремонт.',
  '10': 'Шлюз неправильно настроен или перегружен запросами.',
  '11': 'Slave устройства нет в сети или от него нет ответа.',
};

export const ModbusFC = (code: string) => {
  return mapFC[code] || '';
};

export const ModbusErrorFC = (code: string, errorCode: string) => {
  const FC = mapFC[code] || '';
  const error = mapError[errorCode] || '';
  return FC + ' - ' + error;
};
