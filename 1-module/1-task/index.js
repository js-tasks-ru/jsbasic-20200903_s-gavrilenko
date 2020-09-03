/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n < 0) {
    return "Не определен";
  } else if (n === 0) {
    return 1;
  } else if (n > 0) {
    let result = 1;
    for (let i = n; i > 0; i--) {
      result = result * i;
    }
    return result;
  }
}
