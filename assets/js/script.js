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
}

function decrement() {
  if (currentNumber <= 0) {
    return;
  }
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
