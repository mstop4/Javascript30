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

  // This fixes the rotation glitch that occurs when the second hand
  // rolls over from :59 to :00.
  // Minute and hour hands don't need this fix since they move to slowly
  // to warrant using transitions.
  
  if (seconds === 59) {
    setTimeout(function() {
      rolloverFixStart(secondHand, secondsDegrees);
    }, 500 );

    setTimeout(function() {
      rolloverFixEnd(secondHand);
    }, 800);
  }
}

// Init clock, then update every second 
setDate();
setInterval(setDate, 1000);