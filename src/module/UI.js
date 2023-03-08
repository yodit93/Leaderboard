import { getLists } from './storage.js';

const scoreList = document.querySelector('.score-list');

export default class UI {
  constructor(listArr) {
    this.listArr = listArr;
  }

  static display = () => {
    this.listArr = getLists();
    scoreList.innerHTML = '';
    this.listArr.forEach((list) => {
      const score = document.createElement('li');
      score.className = 'list';
      score.innerHTML = `<p class="list-par" id=${list.id}>${list.name}: ${list.score}</p>`;
      scoreList.appendChild(score);
    });
  }
}