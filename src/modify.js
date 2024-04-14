/** FEEDBACK: Great job! */
const uppercaseAll = (...words) => {
  // return [
  //   word1.toUpperCase(),
  //   word2.toUpperCase(),
  //   word3.toUpperCase(),
  // ];
  let wordsArr = [];
  for (const word of words) {
    wordsArr.push(word.toUpperCase())
  }
  return wordsArr
};
// console.log(uppercaseAll('hello', 'my', 'name', 'is', 'bob'));

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
