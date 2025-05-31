// create a function that takes an array of objects input, and returns the users whose age > 18 and are male 




// initialize a new array, push to a new array
function solve(ar) {
    let arr = [];

    for(let i = 0; i < ar.length; i++) {
        if(ar[i].gender === 'male' && ar[i].age > 18) {
            arr.push(ar[i])
        }
    }
    return arr;
}

let users = [
    {
        firstName: 'name',
        age: 19,
        gender: 'male'
    },
    {
        firstName: 'name2',
        age: 21,
        gender: 'female'
    }, 
    {
        firstName: 'name3',
        age: 24,
        gender: 'male'
    }
]

console.log(solve(users));

// you can use the filter function inside an array, map, reduce 

