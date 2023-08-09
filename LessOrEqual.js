// Write a JavaScript program to calculate how many numbers in the given array are less than or equal to the given value. This is done using the percentile formula.

const numbers = [16, 8, 39, 2];
const value = 20;
const total = numbers.length;

const filteredNumbers = numbers.filter(num => num <= value).length;
const percentage = (filteredNumbers / total) * 100;

console.log(percentage);
