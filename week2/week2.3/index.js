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