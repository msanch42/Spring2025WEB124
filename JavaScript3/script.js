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
  const textInput = document.querySelector('[name="text"]');  //Created textInput and textDisplay constant variables 
  const textDisplay = document.querySelector('#textDisplay');  
  msg.text = document.querySelector('[name="text"]').value;

  // Sync msg text with input
 // msg.text = textInput.value;

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

// Render text as individual span elements
function renderText(text) {
  textDisplay.innerHTML = text
    .split(/\s+/)
    .map(word => `<span class="word">${word}</span>`)
    .join(' ');
}

// Created function that highlights words in real-time as they are spoken
msg.onboundary = function (event) {
  if (event.name !== 'word') return;

  const charIndex = event.charIndex;
  const words = [...document.querySelectorAll('.word')];

  // Find which word is currently being spoken
  let count = 0;
  let index = -1;
  let position = 0;

  for (let word of words) {
    const length = word.textContent.length + 1; // +1 for space
    if (position + length > charIndex) {
      index = count;
      break;
    }
    position += length;
    count++;
  }

  words.forEach(word => word.classList.remove('highlight'));
  if (words[index]) {
    words[index].classList.add('highlight');
  }
};

msg.onend = () => {
  document.querySelectorAll('.word').forEach(word => word.classList.remove('highlight'));
};

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
