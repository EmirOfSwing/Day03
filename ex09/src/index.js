function main(numOne, numTwo) {
  var difference;
  difference = numOne - numTwo;

  return difference;
}

console.log(main((numOne = 15), (numTwo = 8)));
console.log(main((numOne = 25), (numTwo = 8)));
console.log(main((numOne = 425), (numTwo = 120)));

module.exports = main;
