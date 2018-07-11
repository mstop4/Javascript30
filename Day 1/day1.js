window.addEventListener("keydown", function(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) 
    return; // no audio element found, give up

  // rewind audio then play
  audio.currentTime = 0; 
  audio.play();

  key.classList.add('playing');
});

function removeTransition(e) {
  //only listen for transform end
  if (e.propertyName !== 'transform')
    return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(function(key) {
  key.addEventListener('transitionend', removeTransition)
});