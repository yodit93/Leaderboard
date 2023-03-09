const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const createGame = async (gameName) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      name: gameName,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`${baseURL}games/`, options);
  const data = await response.json();
  const gameId = data.result.split(' ')[3];
  return gameId;
};

const checkId = () => {
  let gameId;
  if (localStorage.getItem('id')) {
    gameId = localStorage.getItem('id');
  } else {
    createGame('second').then((data) => localStorage.setItem('id', data));
    gameId = localStorage.getItem('id');
  }
  return gameId;
};

export default checkId;
