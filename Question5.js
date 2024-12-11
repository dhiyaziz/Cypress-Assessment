/*
Question 5
Using Javascript. 
Create an array of 10 random integer numbers between 1 - 1000 and use console.log() to display each of the numbers in the array and the sum of the array.
*/

// Create an array to store random numbers
let numbers = [];

// Fill the array with 10 random numbers between 1-1000
for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 1000) + 1;
    numbers.push(randomNum);
}

// Print each number in the array
console.log("The numbers are:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Calculate the sum of the numbers
let total = 0;
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

// Print the sum of the array
console.log("The sum of the 10 numbers is:", total);
