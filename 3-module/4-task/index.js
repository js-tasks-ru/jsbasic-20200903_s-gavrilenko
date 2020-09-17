/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let str = "";
  for (let i = 0; i < users.length; i++) {
    if (users[i].age <= age && str === "") {
      str = str + users[i].name + ", " + users[i].balance;
    } else if (users[i].age <= age && str != "") {
      str = str + "\n" + users[i].name + ", " + users[i].balance;
    }
  }
  return str;
}
