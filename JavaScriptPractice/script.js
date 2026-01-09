// variables declared using var, let, and const
var name = "Alice";// String variable using var
let age = 30; // Number variable using let
const isStudent = false; // Boolean variable using const

// Logging the variables to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

//Named function
function greet() {
    console.log("Hello, " + name + "!");
}   

//Anonymous function assigned to a variable
const farewell = function() {
    console.log("Goodbye, " + name + "!");
};

//Built-in function usage
function randomNumber() {
    return Math.random();
}

//conditional statements
if (age < 18) {
    console.log(name + " is a minor.");
} else {
    console.log(name + " is an adult.");
}

//Switch statement
switch (age) {
    case 16:
        console.log(name + " is 16 years old.");
        break;
    case 30:
        console.log(name + " is 30 years old.");
        break;
    default:
        console.log(name + " is a different age.");
}

//Arrays of different data types
let mixedArray = [name, age, isStudent, greet, farewell, randomNumber()];

// Loop through the array
for (let i = 0; i < mixedArray.length; i++) {
    console.log("Array element " + i + ":", mixedArray[i]);
}

// Calling the functions
greet();
farewell();
console.log("Random Number:", randomNumber());// calling built-in function
