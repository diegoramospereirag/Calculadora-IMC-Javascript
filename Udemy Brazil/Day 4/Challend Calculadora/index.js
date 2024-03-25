function calculate() {
  let num1 = Number(document.getElementById('num1').value);
  let num2 = Number(document.getElementById('num2').value);
  total = 0;
  if (document.getElementById('add')) {
    total = num1 + num2;
  } else if (document.getElementById('sub')) {
    total = num1 - num2;
  } else if (document.getElementById('multi')) {
    total = num1 * num2;
  } else {
    total = num1 / num2;
  }
  document.getElementById('resultArea').innerHTML = total;
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
}
