const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function secondHandRolloverStart(deg) {
  secondHand.classList.add('noTransition');
  secondHand.style.transform = `rotate(${deg-360}deg)`;
}

function secondHandRolloverEnd(deg) {
  secondHand.classList.remove('noTransition');
}

function setDate() {
  const now  = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = (((hours % 12) / 12) * 360) + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (seconds === 59) {
    setTimeout(function() {
      secondHandRolloverStart(secondsDegrees)
    }, 500 );

    setTimeout(function() {
      secondHandRolloverEnd(secondsDegrees)
    }, 800);
  }
}

setInterval(setDate, 1000);