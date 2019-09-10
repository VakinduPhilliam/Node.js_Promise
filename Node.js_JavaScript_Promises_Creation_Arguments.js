// Node.js JavaScript Promises

// The resolve() and reject() takes one argument which can be a string, number, boolean, array or object.


// An example to help us fully understand the promise creation.


const promise = new Promise((resolve, reject) => {

const randomNumber = Math.random();

setTimeout(() => {

if(randomNumber < .6) {

resolve (‘All things went well!’);

} else {

reject (‘Something went wrong’);

}, 2000);

});


//
// Here I am creating a new promise using the Promise constructor. 

// The promise is resolved or rejected after 2 seconds of its creation. 

// The promise is resolved if the randomNumber is less than .6 and rejected otherwise.

// When the promise is created, it will be in a pending state, and its value will be undefined.

// After the 2 seconds timer finishes, the promise is either resolved or rejected randomly, and its value will
// be the value passed to the resolve or reject function.

//

