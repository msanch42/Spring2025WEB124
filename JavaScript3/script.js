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
const textDisplay = document.querySelector('#textDisplay');
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

//Added function to indicate if voiceinator is speaking
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speakButton.textContent = 'Speaking...';
    speechSynthesis.speak(msg);
  } else {
    speakButton.textContent = 'Speak';
  }
}

// Set the text to speak and highlight
const rawText = "This is a test of the speech synthesis API with word highlighting.";

function renderText(text) {
  textDisplay.innerHTML = text
    .split(/\s+/)
    .map(word => `<span class="word">${word}</span>`)
    .join(' ');
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    msg.text = rawText;
    renderText(rawText);
    speechSynthesis.speak(msg);
  }
}

let wordIndex = 0;

// Highlight words as they're spoken
msg.onboundary = function(event) {
  if (event.name === 'word') {
    const wordSpans = document.querySelectorAll('.word');
    wordSpans.forEach(span => span.classList.remove('highlight'));
    
    const charIndex = event.charIndex;
    const before = msg.text.slice(0, charIndex);
    const wordCount = before.trim().split(/\s+/).length;

    const currentSpan = wordSpans[wordCount];
    if (currentSpan) {
      currentSpan.classList.add('highlight');
    }
  }
};

msg.onend = () => {
  document.querySelectorAll('.word').forEach(span => span.classList.remove('highlight'));
};

msg.onend = () => {
  speakButton.textContent = 'Speak';
};

  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesDropdown.addEventListener('change', setVoice);
  options.forEach(option => option.addEventListener('change', setOption));
  speakButton.addEventListener('click', toggle);
  stopButton.addEventListener('click', () => toggle(false));
