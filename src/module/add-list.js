import { saveList, getLists } from './storage.js';
import UI from './UI.js';
import CreateList from './create-list.js';

const addList = (name, score) => {
  const listArr = getLists();
  const id = listArr.length + 1;
  const newList = new CreateList(name, score, id);
  listArr.push(newList);
  saveList(listArr);
  UI.display();
};

export { addList as default };
