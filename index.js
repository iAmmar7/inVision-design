var step = 1;

var changeToLeft = document.querySelector('.left-change');
var changeToRight = document.querySelector('.right-change');

changeStep(step);

// Change Step No to -1
changeToLeft.addEventListener('click', e => {
  e.preventDefault();

  if (step === 1) {
    step = 3;
  } else {
    step--;
  }

  changeStep(step);
});

// Change Step No to +1
changeToRight.addEventListener('click', e => {
  e.preventDefault();

  if (step === 3) {
    step = 1;
  } else {
    step++;
  }

  changeStep(step);
});

// Display step text and change its color
function changeStep(step) {
  document.getElementById('stepText').innerHTML = `Step ${step} of 3`;
  document.getElementById('dot-1').style.backgroundColor = 'grey';
  document.getElementById('dot-2').style.backgroundColor = 'grey';
  document.getElementById('dot-3').style.backgroundColor = 'grey';

  document.getElementById('form1').style.display = 'none';
  document.getElementById('form2').style.display = 'none';
  document.getElementById('form3').style.display = 'none';

  if (step == 1) {
    document.getElementById('dot-1').style.backgroundColor = '#000';
    document.getElementById('form1').style.display = 'flex';
  } else if (step === 2) {
    document.getElementById('dot-2').style.backgroundColor = '#000';
    document.getElementById('form2').style.display = 'flex';
  } else {
    document.getElementById('dot-3').style.backgroundColor = '#000';
    document.getElementById('form3').style.display = 'flex';
  }
}
