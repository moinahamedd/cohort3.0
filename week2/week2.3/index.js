// callback hell examples with setTimeout()

// setTimeout( function () {
//     console.log('hi');
//     setTimeout(function () {
//         console.log('hello');
//         setTimeout(function () {
//             console.log('last one');
//         }, 5000)
//     }, 3000);
// }, 1000);


// setTimeout( function () {
//     console.log('hi'); 
// }, 1000);

// setTimeout( function () {
//     console.log('hello');
// }, 3000 + 1000)

// setTimeout( function () {
//     console.log('last one');
// }, 4000 + 5000);

// alter solution without callback hell
function step1() {
    console.log('hi');
    setTimeout(step2, 3000);
}

function step2() {
    console.log('hello');
    setTimeout(step3, 5000);
}

function step3() {
    console.log('last one');
}

setTimeout(step1, 1000);



/* using setTimeoutPromisified function to improve the readeblity */
function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration)
    });
};


//chaining promise calls
setTimeoutPromisified(1000).then(function () {
    console.log('hi');
    setTimeoutPromisified(3000).then(function () {
        console.log('hello');
        setTimeoutPromisified(5000).then(function () {
            console.log('last one');
        });
    });
});

console.log('outside the loop');

// alternate way to chain calls(better way)
setTimeoutPromisified(1000).then(function () {
    console.log('hi');
    return setTimeoutPromisified(3000)
}).then(function () {
    console.log('hello');
    return setTimeoutPromisified(5000)
}).then(function () {
    console.log('last one');
});

/* 
Async Await Syntax
Async and Await provides a way to write asynchronous code that looks and behaves like synchronous code, makeing it easier to read and maintain.

it builds on top of Promises and allows you to avoid chaining .then() and .catch() methods while still working with asynchronous operations.
*/

async function solve() {
    await setTimeoutPromisified(1000); 
    console.log('a hi');
    await setTimeoutPromisified(3000);
    console.log('a hello');
    await setTimeoutPromisified(5000);
    console.log('a last one');   
}

solve();