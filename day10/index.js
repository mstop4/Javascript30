const checkboxes = document.querySelectorAll('.inbox [type=checkbox]');
let laskChecked;
console.dir(checkboxes);

function handleCheck(e) {
  if (e.shiftKey && this.checked){
    let inBetween = false;
    let done = false;
    lastChecked = this;

    checkboxes.forEach(cb => {
      if (!done) {
        if (cb.checked) {
          cb === lastChecked ? done = true : inBetween = !inBetween;
        } 
        else if (inBetween) {
          cb.checked = true;
        }
      }
    })
  }
}

checkboxes.forEach(cb => {
  cb.addEventListener('click', handleCheck);
})