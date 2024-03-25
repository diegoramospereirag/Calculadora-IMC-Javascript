function formatMoney(value) {
  value = Math.ceil(value * 100) / 100;
  value = value.toFixed(2);
  return 'R$' + value;
}

function formatPerson(value) {
  if (value == 1) return value + ' Person';
  return value + ' People';
}

function update() {
  let bill = Number(document.getElementById('yourBill').value);
  let tipPorcente = document.getElementById('tipInput').value;
  let split = document.getElementById('splitInput').value;

  let tipValue = bill * (tipPorcente / 100);
  let billTotal = bill + tipValue;
  let billEach = billTotal / split;

  document.getElementById('tipPercent').innerHTML = tipPorcente + '%';
  document.getElementById('tipValue').innerHTML = formatMoney(tipValue);
  document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal);
  document.getElementById('splitValue').innerHTML = formatPerson(split);
  document.getElementById('billEach').innerHTML = formatMoney(billEach);
}
