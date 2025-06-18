/* 
CLASSES
 - In javascript, classes are a way to define blueprints for creating objects(these objects are different from the objects defined in the previous lectures)
*/

class Rectangle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }

    area() {
        return this.height * this.width;
    }

    paint() {
        console.log(`painting with color ${this.color}`);
    }
}

const rect = new Rectangle(2,4,'red');
const area = rect.area();
console.log(area);
rect.paint();


/*
    PROMISES
     - A Promise in Javascript is an object that represents the eventual completion(or failure) of an asynchronous operation and its resulting value.
     Promises are used to handle asynchronous more effectively than traditional callback function, providing a cleaner and more manageable way to deal with code that executes
     asynchronously, such as API calls, I/O file, or timers
*/

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function waitingTime() {
    console.log('3 seconds later');
}

setTimeoutPromisified(3000).then(waitingTime)

// promisified setTimoue examples
//vr1
function waitFor3(resolve) {
    setTimeout(resolve, 3000)
}

function main() {
    console.log('main is called');
}

waitFor3(main);

//vr2
function randomTime(resolve) {
  setTimeout(resolve, 4000); // Resolves the promise after 4 seconds
}

let p = new Promise(randomTime); // Create a promise using the above function

function callback() {
  console.log('promise succeeded');
}

p.then(callback); // Attach a success callback



function randomTime() {
  return new Promise(resolve => {
    setTimeout(resolve, 4000);
  });
}

async function run() {
  await randomTime(); // waits for 4 seconds
  console.log('promise succeeded');
}

run();


/* 
  article references
*/
// Declare function
function fetchData(callback) {
  setTimeout(() => {
    const data = {name: "John", age: 30};
    callback(data);
  }, 3000);
}

// Execute function with a callback
fetchData(function(data) {
  console.log(data);
});

console.log("Data is being fetched...");

// In this example:
// We have a function called fetchData that uses the setTimeout method to simulate an asynchronous operation. The function takes a callback as an argument.
// The callback function is then passed the data retrieved by the function after the timeout has been completed.

// The setTimeout method is used to execute the callback after a specified time (in this case, 3 seconds). The callback will be executed asynchronously, which means that the program will continue to execute the next line of code without waiting for the timeout to complete.
//example of callback hell
// getData(function(a) {
//   getMoreData(a, function(b) {
//     getEvenMoreData(b, function(c) {
//       getEvenEvenMoreData(c, function(d) {
//         getFinalData(d, function(finalData) {
//           console.log(finalData);
//         });
//       });
//     });
//   });
// });