//Add code to the function eitherFilter in the place marked "ADD CODE HERE" in order to achieve the desired console logs. The array returned from eitherFilter should contain all elements in the passed-in array that yield a truthy return value when passed into EITHER of the two callbacks passed into eitherFilter.
function eitherFilter(array, callback1, callback2) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (callback1(array[i]) === true) {
      output.push(array[i]);
    }
    if (callback2(array[i]) === true) {
      output.push(array[i]);
    }
  }
  return output;
}

const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]
