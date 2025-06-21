// callback hell examples with setTimeout()

setTimeout( function () {
    console.log('hi');
    setTimeout(function () {
        console.log('hello');
        setTimeout(function () {
            console.log('last one');
        }, 5000)
    }, 3000);
}, 1000);


setTimeout( function () {
    console.log('hi'); 
}, 1000);

setTimeout( function () {
    console.log('hello');
}, 3000 + 1000)

setTimeout( function () {
    console.log('last one');
}, 4000 + 5000);