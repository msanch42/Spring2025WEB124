// Monica Sanchez 3-26-25
// Adapted from https://javasript.com/
// JavaScript Drum Kit
/* New information:
    play() method,
    audio() element,
    back ticks ``,
    keyCode
*/
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

/* added code to listen for click events */

function playSoundOnClick(e) {
    const letterClicked = e.target.id;
    if (!letterClicked) return;
    e.target.parentNode.classList.add('playing');
    switch(letterClicked) {
        case "j":
            document.getElementById("audioj").currentTime = 0;
            document.getElementById("audioj").play();
            break;
        case "u":
            document.getElementById("audiou").currentTime = 0;
            document.getElementById("audiou").play();
            break;
        case "n":
            document.getElementById("audion").currentTime = 0;
            document.getElementById("audion").play();
            break;
        case "g":
            document.getElementById("audiog").currentTime = 0;
            document.getElementById("audiog").play();
            break;
        case "l":
            document.getElementById("audiol").currentTime = 0;
            document.getElementById("audiol").play();
            break;
        case "e":
            document.getElementById("audioe").currentTime = 0;
            document.getElementById("audioe").play();
            break;
    }
}
