const noteA = null;
var audioCtx = null;

// create Oscillator node
var oscillator = null;

const playNoteA = () => {
  if (oscillator == null) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = audioCtx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
    oscillator.start();
  }
  oscillator.connect(audioCtx.destination);
};

const stopNoteA = () => {
  oscillator.disconnect();
};
