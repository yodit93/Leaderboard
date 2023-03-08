import addList from './module/add-list.js';
import UI from './module/UI.js';
import './style.css';

const form = document.querySelector('.form');
const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');

UI.display();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const namevalue = inputName.value;
  const scorevalue = inputScore.value;
  addList(namevalue, scorevalue);
  inputName.value = '';
  inputScore.value = '';
});