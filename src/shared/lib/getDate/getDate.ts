export function getDate() {
  const d = new Date();
  var date =
    d.getFullYear() +
    '-' +
    ('0' + (d.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + d.getDate()).slice(-2) +
    ' ' +
    d.toLocaleTimeString() +
    '.' +
    ('00' + d.getMilliseconds()).slice(-3);
  return date;
}
