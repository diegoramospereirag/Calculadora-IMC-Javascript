let productValue = Number(prompt('Enter the product value:'));

if (productValue >= 20) {
  document.getElementById('result').innerHTML = 'Approve';
} else {
  document.getElementById('result').innerHTML = 'Denied';
}
