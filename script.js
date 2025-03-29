let timerId;

function update() {
  const hourElement = document.querySelector('.hour');
  const minElement = document.querySelector('.min');
  const secElement = document.querySelector('.sec');

  const now = new Date();

  hourElement.textContent = String(now.getHours()).padStart(2, '0');
  minElement.textContent = String(now.getMinutes()).padStart(2, '0');
  secElement.textContent = String(now.getSeconds()).padStart(2, '0');
}

function clockStart() {
  if (!timerId) {
    timerId = setInterval(update, 1000);
  }
  update();
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}
