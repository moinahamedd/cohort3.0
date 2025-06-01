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