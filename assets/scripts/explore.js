// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const synth = window.speechSynthesis;
  const talk = document.querySelector('button');
  const text = document.getElementById('text-to-speak');
  const face = document.querySelector('img');

  let voices = [];

  function loadVoices() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  talk.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(text.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  
    utterThis.voice = voices.find(v => v.name === selectedOption);

    utterThis.addEventListener('start', () => {
      face.src = 'assets/images/smiling-open.png'; 
    });

    utterThis.addEventListener('end', () => {
      face.src = 'assets/images/smiling.png'; 
    });

    synth.speak(utterThis);
  });
}