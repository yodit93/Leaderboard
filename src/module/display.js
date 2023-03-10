const scoreList = document.querySelector('.score-list');

const display = (lists) => {
  scoreList.innerHTML = '';
  lists = lists.sort((a, b) => b.score - a.score);
  lists.forEach((list) => {
    const score = document.createElement('li');
    score.className = 'list';
    score.innerHTML = `<p class="list-par" id=${list.id}>${list.user}: ${list.score}</p>`;
    scoreList.appendChild(score);
  });
};

export default display;