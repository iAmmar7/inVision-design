var step = 1;

var changeToLeft = document.querySelector('.left-change');
var changeToRight = document.querySelector('.right-change');

displayStep(step);

changeToLeft.addEventListener('click', e => {
  e.preventDefault();

  if (step === 1) {
    step = 3;
  } else {
    step--;
  }

  displayStep(step);
});

changeToRight.addEventListener('click', e => {
  e.preventDefault();

  if (step === 3) {
    step = 1;
  } else {
    step++;
  }

  displayStep(step);
});

function displayStep(step) {
  document.getElementById('stepText').innerHTML = `Step ${step} of 3`;

  document.getElementById('dot-1').style.backgroundColor = 'grey';
  document.getElementById('dot-2').style.backgroundColor = 'grey';
  document.getElementById('dot-3').style.backgroundColor = 'grey';
  if (step == 1) {
    document.getElementById('dot-1').style.backgroundColor = '#000';
  } else if (step === 2) {
    document.getElementById('dot-2').style.backgroundColor = '#000';
  } else {
    document.getElementById('dot-3').style.backgroundColor = '#000';
  }
}
