function main(numOne, numTwo) {
  // Only change code below this line
  var sum;
  sum = numOne + numTwo;
  //Only change code above this line
  return sum;
}

console.log(main((numOne = 15), (numTwo = 8))); // change this line
console.log(main((numOne = 5), (numTwo = 28)));
console.log(main((numOne = 150), (numTwo = 425)));

module.exports = main;
