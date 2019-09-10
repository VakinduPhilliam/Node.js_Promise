// Node.js JavaScript Promises Chaining

//
// Promise.race()

// This method takes an array of promises as input and returns a new promise that fulfills as soon
// as one of the promises in the input array fulfills or rejects as soon as one of the promises in
// the input array rejects.

//
// For example;
//

const promise1 = new Promise((resolve, reject) => {

setTimeout(() => {

resolve(‘Promise1 resolved’);

}, 1000);

});


const promise2 = new Promise((resolve, reject) => {

setTimeout(() => {

reject(‘Promise2 rejected’);

}, 1500);

});


Promise.race([promise1, promise2])

.then((data) => console.log(data)) // Promise1 resolved

.catch((error) => console.log(error));


//
// Here, as soon as the first promise is resolved after 1 second, the returned promise from Promise.race()
// is resolved without waiting for the second promise to be resolved or rejected.

//
// Here, data passed to the then() method is the value of the first promise that resolves.

//
// Promise.race() waits for one of the promises in the array to succeed or fail and fulfills or rejects as
// soon as one of the promises in the array is resolved or rejected.
//
