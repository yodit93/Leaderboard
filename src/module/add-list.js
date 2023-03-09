import checkId from './create-game.js';

const addList = async (name, score) => {
  const gameId = checkId();
  const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
  const options = {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  const response = await fetch(apiUrl, options);
  const data = await response.json();
  return data;
};

export { addList as default };
