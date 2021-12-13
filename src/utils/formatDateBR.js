function formatDate(value) {
  let newValue = value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');

  const dayOrMonth = (index) => index % 2 === 1 && index < 4;

  return newValue.split('').map((v, i) => dayOrMonth(i) ? v + '/' : v).join('');;
}

export default formatDate;
