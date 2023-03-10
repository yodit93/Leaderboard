import addList from './module/add-list.js';
import getScores from './module/get-list.js';
import './style.css';

const form = document.querySelector('.form');
const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');
const refresh = document.querySelector('.refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const namevalue = inputName.value;
  const scorevalue = inputScore.value;
  addList(namevalue, scorevalue);
  getScores();
  inputName.value = '';
  inputScore.value = '';
});

refresh.addEventListener('click', getScores);

window.addEventListener('load', getScores);