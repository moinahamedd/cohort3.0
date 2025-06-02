// FUNCTIONS
// FIND SUM OF TWO NUMBERS
function sum(a, b) {
    return a + b;
}
console.log(sum(2,3));

// FIND SUM FROM 1 TO A NUMBER
function summ(n) {
    let ans = 0;
    for(let i = 1; i <= n; i ++) {
        ans += i;
        // to find sum from 1 to x the formula is x * (x+1)
    }
    return ans;
}
console.log(summ(5));

// SYCHRONOUS CODE
// synchronous code is executed line by line, in the order it's written. 
// Each operation waits for the previous one to to complete before moving on to the next one. example below
function summm(n) {
    let ans = 0;
    for(let i = 1; i <= n; i ++) {
        ans += i;
    }
    return ans;
}
const ans1 = summm(3);
console.log(ans1);
const ans2 = summm(4);
console.log(ans2);
const ans3 = summm(6);
console.log(ans3);

// I/O HEAVY OPERATIONS
// it refers to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices.
// these operations usually requires waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, 
// which can be time-consuming compared to in-memory computations. 
// 1
// var a = readFile(a.txt)
// - this needs to do I/O operation. a.txt contains 'hi there', and this might take while to run before moving onto the next line of code, 
// - depending upon the whether or not we can access the file or if the file even exists which might throw on error and the next line of code won't run
// 2
// var a = 'hi there';
// - this defines a string in the memory. this happens immediately.

// I/O HEAVY OPERATIONS EXAMPLES
// reading a file, starting a clock, HTTP requests

// -------------

// reading a file synchronously example
// const fs = require("fs"); // fs is file system, it's external library/module which allows us to work with file system on your computer.

// const contents = fs.readFile("./a.txt", "utf-8"); //asynchronously
// console.log(contents);
// const contents2 = fs.readFileSync("./b.txt", "utf-8"); //synchronously
// console.log(contents2);


// Think of fetch() like asking a web waiter to bring a file from the kitchen.
// If you're not in a restaurant (i.e., not in a browser), you can't use a waiter. You need to go into the kitchen (your file system), which is what Node.js and fs does.
// fetch('/week2/week2.1/a.txt')   
//   .then(response => response.text())
//   .then(data => console.log(data));


// FUNCTIONAL ARGUMENTS
// passing a function as an argument to another function
// approach 1 - calling the respective function
function addi(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b; 
}

function divide(a, b) {
    return a / b; 
}

console.log(`approach 1 example -  ${addi(1, 2)}`);


// approach 2 - passing in what needs to be done as an argument
function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b; 
}

function division(a, b) {
    return a / b; 
}

function doOperation(a, b, op) {
    return op(a, b);
}

console.log(`approach 2 example ${subtraction(1, 2)}`);
