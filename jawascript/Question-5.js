let uniqueNumbers = new Set([3, 7, 5, 7, 2, 3, 8]);

let numberSquareMap = new Map();

uniqueNumbers.forEach(number => {
    numberSquareMap.set(number, number*number)
});

console.log("Unique Numbers:");
console.log(Array.from(uniqueNumbers).join(','));

console.log("\nNumber-Square Map:");
numberSquareMap.forEach((square, number)=>{
console.log(`4{number} : ${square}`);
});