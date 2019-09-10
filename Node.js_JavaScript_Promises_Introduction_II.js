// Node.js JavaScript Promises Introduction II

// Promises

// A promise is an object that holds the future value of an async operation.

//
// For example, if we are requesting some data from a server, the promise promises us to get that data which
// we can use in the future.

//
// States of a Promise

// A Promise in JavaScript just like in the real-world has 3 states.

// It can be;

// 1. unresolved (pending),
// 2. resolved (fulfilled), or
// 3. rejected
//


//
// Explanation:

// > Unresolved or Pending: A Promise is pending if the result is not ready.
// That is, it’s waiting for something to finish (for example, an async operation).

// > Resolved or Fulfilled: A Promise is resolved if the result is available.
// That is, something finished (for example, an async operation) and all went well.

// > Rejected: A Promise is rejected if an error happened.

//


// SYNTAX:

// Syntax for creating a Promise

const promise = new Promise ((resolve, reject) => {

// ….

});


//
// We create a new promise using the Promise constructor, it takes a single argument, a callback function, also known
// as executor function, which takes two callbacks, resolve and reject.

// The executor function is immediately executed when a promise is created. 

// The promise is resolved by calling the resolve() and rejected by calling reject().

//
