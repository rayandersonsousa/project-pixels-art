const colors = document.getElementsByClassName('color');

function selectColor(event) {
  event.target.classList.add('selected');
}

function unselectColor() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', unselectColor);
  colors[index].addEventListener('click', selectColor);
}

function paintPixel(event) {
  if (event.target.classList.contains('pixel')) {
    const selectedColor = document.querySelector('.selected');
    const newColor = selectedColor.style.backgroundColor;
    event.target.style.backgroundColor = newColor;
  }
}

document.addEventListener('click', paintPixel);
