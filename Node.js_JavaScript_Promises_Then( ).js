// Node.js JavaScript Promises

// then() and catch()

// Now that we know how to create a promise, let’s understand how to consume an already created promise.

// We consume a promise by calling then() and catch() methods on the promise.

//
// For example, requesting data from an API using fetch which returns a promise.
//

// .then() syntax:

// promise.then(successCallback, failureCallback)

//
// The successCallback is called when a promise is resolved. 
// It takes one argument which is the value passed to resolve().

//
// The failureCallback is called when a promise is rejected.
// It takes one argument which is the value passed to reject().


//
// For Example;
//

const promise = new Promise((resolve, reject) => {

const randomNumber = Math.random();

if(randomNumber < .7) {

resolve (‘All things went well!’);

} else {

reject (new Error(‘Something went wrong’));

  }

});

// If the promise is resolved, the successCallback is called with the value passed
// to resolve().
// And if the promise is rejected, the failureCallback is called with the value passed to 
// reject().

promise.then((data) => {

console.log(data); // prints ‘All things went well!’

}, 

(error) => {

console.log(error); // prints Error object

}
);


//
// If the promise is resolved, the successCallback is called with the value passed to resolve().

// And if the promise is rejected, the failureCallback is called with the value passed to reject().
//
