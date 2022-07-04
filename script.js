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
