/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  let str;
  for (let i = 0; i < friends.length; i++) {
    str = friends[i].firstName + " " + friends[i].lastName
    let li = document.createElement('li');
    li.innerHTML = str;
    ul.append(li);
  }
  console.log(ul)
  return ul;
}
