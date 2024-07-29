// Task 1: Create the calculator object 
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    calculate: function (operation, a, b) {
        if (operation === 'add') {
            return this.add(a, b);
        } else if (operation === 'subtract') {
            return this.subtract(a, b);
        } else if (operation === 'multiply') {
            return this.multiply(a, b);
        }
    },
};


// Tast 2: Use call to perform an addition operation

const additionResult = calculator.calculate.call(calculator, 'add', 3,4);
console.log(`Additon Result:${additionResult}`);


// Tast 3: Use apply to perform a multiplication operation with arguments as an array 

const multiplicationResult = calculator.calculate.apply(calculator, ['multiply', 3,4]);
console.log(`Multiplication Result: ${multiplicationResult}`);


// Tast 5: Create the discountCalculator object 

const discountCalculator = {
    discountPercentage: 10,
   applyDiscount: function(amount){
    return amount-(amount*this.discountPercentage)/100;
   }, 
};

// Task 6: Use bind to create a new function bound to discountCalculator 

const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
const discountedAmount = calculateDiscount(100);
console.log(`Discounted Amount: ${discountedAmount}`);

