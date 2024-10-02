// index.js

// Function expression called divide
const divide = function(a, b) {
    return a / b;
};

// Function that divides 2000 by 100
const result = divide(2000, 100); // Example usage (you can remove this)

// Arrow function called square
const square = (x) => {
    return x * x;
};

// Arrow function called add
const add = (x, y) => {
    return x + y;
};

// Exporting the functions to be used in other files, like tests
module.exports = { divide, square, add };
