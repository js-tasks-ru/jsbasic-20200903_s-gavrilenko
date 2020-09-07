/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str.indexOf(`''`) == -1 && str.length >= 1) {
    return str[0].toUpperCase() + str.slice(1);
  } else if (str.length == 0) {
    return str;
  }
}
