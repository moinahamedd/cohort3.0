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