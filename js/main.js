const pickPurple = document.getElementById('purple');
const pickGreen = document.getElementById('green');
const pickBlue = document.getElementById('blue');
const pickMe = document.getElementById('clickme');
const pickBody = document.querySelector('body');

pickPurple.addEventListener('click', changePurple);
pickGreen.addEventListener('click', changeGreen);
pickBlue.addEventListener('click', changeBlue);
pickMe.addEventListener('click', changePickMe);

function changePurple() {
  console.log(pickBody);
  pickBody.style.color = 'white';
  pickBody.style.backgroundColor = 'rgba(241,63,247,1)';
}

function changeGreen() {
  pickBody.style.color = 'white';
  pickBody.style.backgroundColor = 'rgba(0,253,81,1)';
}

function changeBlue() {
  pickBody.style.color = 'white';
  pickBody.style.backgroundColor = 'rgba(0,254,255)';
}

function changePickMe() {
  pickBody.style.color = 'white';
  pickBody.style.backgroundColor = '#FF5733';
}