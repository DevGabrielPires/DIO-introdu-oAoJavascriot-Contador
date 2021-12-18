var currentNumberWrapper = document.getElementById('curretNumber');
var currentNumber = 0;

document.getElementById('subtrair').addEventListener('click', decrement);
document.getElementById('adicionar').addEventListener('click', increment);

function increment() {
  if (currentNumber >= 10) {
    return;
  }
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber >= 0) {
    document.getElementById('curretNumber').style.color = '#000000';
  }
}

function decrement() {
  if (currentNumber <= -10) {
    return;
  }
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber < 0) {
    document.getElementById('curretNumber').style.color = '#FF0000';
  }
}
