/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(/[^0-9.-]/);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != "") {
      newArr.push(Number(arr[i]))
    }
  }
  let min = newArr[0];
  let max = newArr[0];
  for (let u = 1; u < newArr.length; u++) {
    if (max < newArr[u]) {
      max = newArr[u]
    };
    if (min > newArr[u]) {
      min = newArr[u]
    };
  };
  let Obj = { min: min, max: max }
  return Obj;
}
