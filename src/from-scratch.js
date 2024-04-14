/** FEEDBACK: Great use of ternary here! */
const addToFrontOrBack = (arr, value, isFront) => {
  // let placeHolder = [...arr];
  return isFront === true ? arr.unshift(value) : arr.push(value);
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

const newArrayFullOf = (value, numOfValue) => {
  const newVal = [];
  for (let i = 1; i <= numOfValue; i++) {
    newVal.push(value);
  };
  return newVal;
};

const insertIntoMiddle = (arr, value) => {
  arr.splice(Math.floor(arr.length / 2), 0, value);
};

const deleteFromMiddle = (arr) => {
  arr.splice(Math.floor(arr.length / 2), 1);
  // console.log(arr)
};
// deleteFromMiddle([1, 2, 3, 4, 5])
/** FEEDBACK: You could have just used bracket notation here instead of .include() */
const isRightIndex = (arr, value, index) => {
  return arr[index].includes(value);
};

const roundAllNumsDown = (arr) => {
  const newArr = arr.map((x) => Math.floor(x));
  return newArr;
};
// console.log(roundAllNumsDown([5.9, -7.9, 12.9]))

const getAllYCoordinates = (arrOfCoords) => {
  let yCords = [];
  for (let i = 0; i < arrOfCoords.length; i++) {
    yCords.push(arrOfCoords[i][1]);
  };
  return yCords;
};
// console.log(getAllYCoordinates([[1, 2], [3, 4], [5, 6]]))

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
