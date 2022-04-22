// Import stylesheets
import './style.css';
import moment from 'moment';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
const inputEl: HTMLInputElement = document.getElementById('dateinput');
const outputEl: HTMLElement = document.getElementById('output');

appDiv.innerHTML = `<h1>Date Time Criteria Format Converter</h1>`;

// Execute a function when the user releases a key on the keyboard
inputEl.addEventListener('keyup', (event) => {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    outputEl.innerHTML = moment(
      inputEl.value,
      'DD/MM/YYYY, hh:mm A'
    ).toISOString();
  }
});
