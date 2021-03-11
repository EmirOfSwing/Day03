function main(numOne, numTwo) {

    var product
    product = numOne * numTwo;

    return product;
}

console.log(main(numOne = 15, numTwo = 3)); 
console.log(main(numOne = 25, numTwo = 8)); 
console.log(main(numOne = 425, numTwo = 10)); 

module.exports = main;