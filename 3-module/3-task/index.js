/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arr = str.split("-");
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1))
    }
    else {
      newArr.push(arr[i])
    }
  }
  let result = newArr.join('');
  return result;
}
