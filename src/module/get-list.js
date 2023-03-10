import checkId from './create-game.js';
import display from './display.js';

const getLists = async () => {
  const gameId = checkId();
  const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
  const response = await fetch(apiUrl);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error('Couldnt fetch data');
};

const getScores = async () => {
  await getLists().then((data) => {
    const listArr = data.result;
    display(listArr);
    return listArr;
  });
};

export { getScores as default };