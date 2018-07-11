window.addEventListener("keydown", function(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) 
    return; // no audio element found, give up
  audio.play();
});