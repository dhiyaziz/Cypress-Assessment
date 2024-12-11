/* 
Question 4
1, 2, 2, 4, 8, 12, 96 
Please figure out the math patterns of the number sequence. Then using a loop to print out the number sequence and the next 5 numbers. 
You can hard core the first numbers if needed.
Use JavaScript to complete this question
Tips:
1. There are 2 formulas used in the number sequence
2. Starting from position 3, the number is a result from previous 2 numbers. 

- When the index is odd, it will multiply previous number and the result will be the next index
- When the index is even, it will multiply previous number and the result will be the next index
P1: 1 
P2: 2 
P3: 2 - Odd (2 x 1)
P4: 4 - Even (2 + 2)
P5: 8 - Odd (4 x 2)
P6: 12 - Even (8 + 4)
P7: 96 - odd (12 x 8)

*/

function generateSequence(length) {
    // Initialize array with first two integers
    let sequence = [1, 2];
    
    // Generate the sequence
    for (let i = 2; i < length; i++) {
        if (i % 2 === 0) {
            // Even positions: multiply previous two numbers
            sequence[i] = sequence[i-1] * sequence[i-2];
        } else {
            // Odd positions: add previous two numbers
            sequence[i] = sequence[i-1] + sequence[i-2];
        }
    }
    
    return sequence;
}

// Generate the original sequence plus 5 more numbers
const totalLength = 7 + 5; // Original 7 numbers plus 5 more
const result = generateSequence(totalLength);

// Print the sequence
result.forEach((num, index) => {
    console.log(`Position ${index + 1}: ${num}`);
});
