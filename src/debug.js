/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  // while (arr.length > 0) {
  //   arr.pop();
  // }
  arr.length = 0;
  return arr;
};
// const arr1 = [1, 2, 3, 4, 5];
// console.log(clearArr(arr1))

const getFirstItem = (array) => {
  return array[0]
};

module.exports = {
  clearArr,
  getFirstItem,
};

// const amount = arr.length
// console.log(amount)
// arr.slice(...arr).splice(0, amount);
// return arr.map((x) => (x) = arr.pop())
// return arr.pop()
// const arr2 = [];
// return arr = arr2
const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8];
const bigArr1 = [arr1, arr2];
const bigArr2 = [...bigArr1];
arr1.push('oh dear');

console.log(bigArr1)
console.log(bigArr2)