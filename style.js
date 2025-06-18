function clearDisplay() {
  document.getElementById('display').value = '';
}

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculateResult() {
  const expression = document.getElementById('display').value;
  try {
    document.getElementById('display').value = eval(expression);
  } catch {
    document.getElementById('display').value = 'Error';
  }
}
