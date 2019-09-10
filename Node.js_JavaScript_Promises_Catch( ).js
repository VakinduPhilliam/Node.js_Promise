// Node.js JavaScript Promises

// then() and catch()

// Now that we know how to create a promise, let’s understand how to consume an already created promise.

// We consume a promise by calling then() and catch() methods on the promise.

//
// For example, requesting data from an API using fetch which returns a promise.
//

//
// .catch() syntax

// promise.catch(failureCallback)

//
// We use catch() for handling errors.
// It’s more readable than handling errors inside the failureCallback callback of the then() callback.

//
// For example;
//

const promise = new Promise((resolve, reject) => {

reject(new Error(‘Something went wrong’));

});


promise.then((data) => {

console.log(data);

})

.catch((error) => {

console.log(error); // prints Error object

});

