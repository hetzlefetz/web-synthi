const noteA = null;
var audioCtx = null;

// create Oscillator node
var oscillators = {};

// note frequencies (source: https://gist.github.com/i-Robi/8684800?permalink_comment_id=2307473#gistcomment-2307473)
var noteFreqs = {
    "C":   [16.35, 32.70, 65.41, 130.81, 261.63, 523.25, 1046.50, 2093.00, 4186.01],
   "Db":   [17.32, 34.65, 69.30, 138.59, 277.18, 554.37, 1108.73, 2217.46, 4434.92],
    "D":   [18.35, 36.71, 73.42, 146.83, 293.66, 587.33, 1174.66, 2349.32, 4698.64],
   "Eb":   [19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51, 2489.02, 4978.03],
    "E":   [20.60, 41.20, 82.41, 164.81, 329.63, 659.26, 1318.51, 2637.02],
    "F":   [21.83, 43.65, 87.31, 174.61, 349.23, 698.46, 1396.91, 2793.83],
   "Gb":   [23.12, 46.25, 92.50, 185.00, 369.99, 739.99, 1479.98, 2959.96],
    "G":   [24.50, 49.00, 98.00, 196.00, 392.00, 783.99, 1567.98, 3135.96],
   "Ab":   [25.96, 51.91, 103.83, 207.65, 415.30, 830.61, 1661.22, 3322.44],
    "A":   [27.50, 55.00, 110.00, 220.00, 440.00, 880.00, 1760.00, 3520.00],
   "Bb":   [29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66, 3729.31],
    "B":   [30.87, 61.74, 123.47, 246.94, 493.88, 987.77, 1975.53, 3951.07]
 }

const playNote = (note, octave) => {
  if(audioCtx == null) { 
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  oscillators[note+octave] = audioCtx.createOscillator();
  oscillators[note+octave].type = "sine";
  oscillators[note+octave].frequency.setValueAtTime(noteFreqs[note][octave], 
                                             audioCtx.currentTime); // value in hertz
  oscillators[note+octave].start();
  oscillators[note+octave].connect(audioCtx.destination);
};

const stopNote = (note, octave) => {
  oscillators[note+octave].disconnect();
  oscillators[note+octave] = null;
};


const playNoteA = () => {
  playNote("A", 4);
};

const stopNoteA = () => {
  stopNote("A", 4);
};

const playNoteB = () => {
  playNote("B", 4);
};

const stopNoteB = () => {
  stopNote("B", 4);
};

const playNoteC = () => {
  playNote("C", 5);
};

const stopNoteC = () => {
  stopNote("C", 5);
};

const playNoteD = () => {
  playNote("D", 5);
};

const stopNoteD = () => {
  stopNote("D", 5);
};

const playNoteE = () => {
  playNote("E", 5);
};

const stopNoteE = () => {
  stopNote("E", 5);
};

const playNoteF = () => {
  playNote("F", 5);
};

const stopNoteF = () => {
  stopNote("F", 5);
};

const playNoteG = () => {
  playNote("G", 5);
};

const stopNoteG = () => {
  stopNote("G", 5);
};

