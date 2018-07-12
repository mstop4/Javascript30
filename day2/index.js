const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function rolloverFixStart(hand, deg) {
  hand.classList.add('noTransition');
  hand.style.transform = `rotate(${deg-360}deg)`;
}

function rolloverFixEnd(hand) {
  hand.classList.remove('noTransition');
}

function setDate() {
  const now  = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((((minutes + seconds / 60) / 60) * 360)) + 90;
  const hoursDegrees = ((((hours + minutes / 60 + seconds / 3600) % 12) / 12) * 360) + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(`${hours}:${minutes}:${seconds}`);

  if (seconds === 59) {
    setTimeout(function() {
      rolloverFixStart(secondHand, secondsDegrees);
    }, 500 );

    setTimeout(function() {
      rolloverFixEnd(secondHand);
    }, 800);
  }
}

setInterval(setDate, 1000);