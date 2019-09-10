// Node.js JavaScript Promises

//
// Chaining Promises

// The then() and catch() methods can also return a new Promise which can be handled by chaining another
// then() at the end of the previous then() method.

// We use promises chaining when we want to resolve promises in a sequence.
//

//
// For example;
//

const promise1 = new Promise((resolve, reject) => {

resolve(‘Promise1 resolved’);

});


const promise2 =new Promise((resolve, reject) => {

resolve(‘Promise2 resolved’);

});


const promise3 = new Promise((resolve, reject) => {

reject(‘Promise3 rejected’);

});

//
// Chaining the promises
//

promise1.then((data) => {

console.log(data); // Promise1 resolved

return promise2;

})

.then((data) => {

console.log(data); //Promise2 resolved

return promise3;

})

.then((data) => {

console.log(data);

})

.catch((error) => {

console.log(error); // Promise3 rejected

});


//
// When promise1 is resolved, the then() method is called which returns promise2.

// The next then() is called when promise2 is resolved which returns promise3.

// Since promise3 is rejected, the next then() is not called, instead catch() is called which handles the
// promise3 rejection.

//

//
// Note:

// Generally only one catch() is enough for handling rejection of any promise in the promise chain, if it’s
// at the end of the chain.

//
// Common Mistake:

// A lot of beginners make the mistake of nesting promises inside another promise. 

// Although this works fine, this is considered to be a poor style and makes our code difficult to read. 

// If you have a sequence of promises to resolve, it’s better to chain promises one after another rather than
// nest one inside another.

//
