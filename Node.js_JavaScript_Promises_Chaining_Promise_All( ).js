// Node.js JavaScript Promises Chaining

// Promise.all()

// This method takes an array of promises as input and returns a new Promise that fulfills when all
// of the promises inside the input array have fulfilled or rejects as soon as one of the promises in
// the array rejects.

//
// For Example;
//

const promise1 = new Promise((resolve, reject) => {

setTimeout(() => {

resolve (‘Promise1 resolved’);

}, 2000);

});


const promise2 = new Promise((resolve, reject) => {

setTimeout(() => {

resolve (‘Promise2 resolved’);

}, 1500);

});


Promise.all([promise1, promise2])

.then((data) => console.log(data[0], data[1]))

.catch((error) => console.log(error));


//
// Here, the data argument inside the then() method is an array which contains promise values in the same
// order as defined in promise array passed to Promise.all() (if all promises fulfill).

// Promise.all() can be useful when you have more than one promise, and you want to know when all of the promises
// have resolved. 

//
// For example, if you are requesting data from different APIs and you want to do something with the data only when
// all of the requests are successful.

//
// So, Promise.all() waits for all promises to succeed and fails if any of the promises in the array fails.
//
