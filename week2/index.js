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
