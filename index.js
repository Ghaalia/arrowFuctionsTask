// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

console.log("Question 1")
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Ghaalia"))
console.log("\n")


// Q2) Write a simple arrow function that takes two parameters and returns their sum.
console.log("Question 2")
const sum = (x,y) => x+y;
console.log(sum(3,7))
console.log("\n")

// Q3) Write a simple arrow function that squares a number.
console.log("Question 3")
const square = (x) => x**2;
console.log(square(5))
console.log("\n")

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
console.log("Question 4")
const sqrArray = (arr) => {

    let newArray = [];

    for(i=0; i<arr.length; i++)
    {
        newArray[i] = arr[i]**2;
    }

    return newArray;

}

console.log(`The new Array is ${sqrArray([2,4,5])}`); // print newArray = [4,16,25]
