// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('img');
  const playSound = document.querySelector('button');
  const audio = document.querySelector('audio');
  const confetti = new JSConfetti();
  const volume = document.getElementById('volume');
  const volumeImg = document.querySelector('#volume-controls img');

  hornSelect.addEventListener('change', () => {
    const selection = hornSelect.value;
    image.src = `assets/images/${selection}.svg`;
    audio.src = `assets/audio/${selection}.mp3`;
  });

  playSound.addEventListener('click', (event) => {
    audio.play();

    if (hornSelect.value == 'party-horn') {
      confetti.addConfetti();
    }
  });

  volume.addEventListener('input', () => {
    const value = volume.value;

    audio.volume = value/100;

    if (value == 0) {
      volumeImg.src = 'assets/icons/volume-level-0.svg';
    } else if (value < 33) {
      volumeImg.src = 'assets/icons/volume-level-1.svg';
    } else if (value < 67) {
      volumeImg.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeImg.src = 'assets/icons/volume-level-3.svg';
    }
  });
}