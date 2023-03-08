const saveList = (listArr) => {
  localStorage.setItem('lists', JSON.stringify(listArr));
};

const getLists = () => {
  const listArr = JSON.parse(localStorage.getItem('lists')) || [];
  return listArr;
};

export { saveList, getLists };