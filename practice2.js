// Declare empty array
let numbers = [];

// Use while loop to generate numbers
let i = 1;
while (i < 21) {
// Insert numbers
numbers.push(i)
i++;
}

for (let x = 0; x < numbers.length; x++) {
    if (numbers[x] % 2 === 0) {
        continue;
    }
    if(numbers[x] >= 10) {
        break;
    }
    console.log("cosole.log using for: " + numbers[x])
    
}