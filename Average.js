// Write a JavaScript program to compute the average of an array, after mapping each element to a value using the provided function.

const numbers = [16, 8, 39, 2]

let average = 0

numbers.map(num => average += num / numbers.length)

console.log(average)


