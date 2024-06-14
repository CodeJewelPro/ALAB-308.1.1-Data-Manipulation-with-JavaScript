// Part One
// Initialize numbers
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// 1. Check if all numbers are divisible by 5
const allDivisibleBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log(`All numbers divisible by 5: ${allDivisibleBy5}`);

// 2. Check if the first number is larger than the last
const isFirstLargerThanLast = n1 > n4;
console.log(`Is the first number larger than the last: ${isFirstLargerThanLast}`);

// 3. Perform arithmetic equation
const arithmeticResult = ((n2 - n1) * n3) % n4;
console.log(`Arithmetic chain result: ${arithmeticResult}`);

// 4. Change the isOver25 logic
const isAnyOver25 = (n1 > 25) || (n2 > 25) || (n3 > 25) || (n4 > 25);
console.log(`Is any number over 25: ${isAnyOver25}`);

// Part Two
// Constants
const distance = 1500; // miles
const fuelEfficiency = { 55: 30, 60: 28, 75: 23 }; // miles per gallon
const fuelCostPerGallon = 3; // dollars
const fuelBudget = 175; // dollars
const speeds = [55, 60, 75];

// Function to calculate trip details
const calculateTripDetails = (speed) => {
const fuelNeeded = distance / fuelEfficiency[speed];
const fuelCost = fuelNeeded * fuelCostPerGallon;
const time = distance / speed;

console.log(`At ${speed} mph:`);
console.log(`Fuel needed: ${fuelNeeded.toFixed(2)} gallons`);
console.log(`Fuel cost: $${fuelCost.toFixed(2)}`);
console.log(`Time: ${time.toFixed(2)} hours`);
console.log(`Within budget: ${fuelCost <= fuelBudget}`);
console.log('---');
};

// Calculate and log the details for each speed
speeds.forEach(calculateTripDetails);