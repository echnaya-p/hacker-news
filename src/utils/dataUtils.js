export const formatDate = (date) => {
  const itemDate = new Date(date);
  const currentDate = new Date();
  const result = new Date(currentDate - itemDate);

  let dd = result.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = result.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = result.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}