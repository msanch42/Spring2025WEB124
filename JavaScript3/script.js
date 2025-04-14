// Monica Sanchez 4-14-25
// Adapted from https://javasript.com/
// Speech Synthesis
/* New/expanded information:
    use of temperate literals (backticks),
    SpeechSynthesisUtterance function, populateVoices function,
    manipulating the voices objects, addEventListeners for voices
*/

 const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');
  msg.text = document.querySelector('[name="text"]').value;

  function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
      .filter(voice => voice.lang.includes('en'))
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
  }

  function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
  }

  function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
      speechSynthesis.speak(msg);
    }
  }

  function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
  }

//Indicate if voiceinator is currently speaking
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speakButton.textContent = 'Speaking...';
    speechSynthesis.speak(msg);
  } else {
    speakButton.textContent = 'Speak';
  }
}

msg.onend = () => {
  speakButton.textContent = 'Speak';
};

  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesDropdown.addEventListener('change', setVoice);
  options.forEach(option => option.addEventListener('change', setOption));
  speakButton.addEventListener('click', toggle);
  stopButton.addEventListener('click', () => toggle(false));

