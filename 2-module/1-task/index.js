/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;
  for (let salary in salaries) {
    if (typeof (salaries[salary]) === "number") {
      sum = sum + salaries[salary];
    }
  }
  return sum;
}
