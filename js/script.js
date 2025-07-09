//dichiarazione delle variabili

const button = document.getElementById('my-button');
const image = document.getElementById('pic');

button.addEventListener('click', function () {
  if (image.src = './img/white_lamp.png') {
    image.src = './img/yellow_lamp.png';
    button.innerText = 'Spegni';
  } else {
    image.src = './img/white_lamp.png';
    button.innerText = 'Accendi';
  }
});