// Node.js JavaScript Promises Creation

//
// Creating a Promise

// We create a new promise using the Promise constructor, it takes a single argument, a callback function, also
// known as executor function, which takes two callbacks, resolve and reject.

// The executor function is immediately executed when a promise is created. 

// The promise is resolved by calling the resolve() and rejected by calling reject().

//
// For example;
//

const promise = new Promise((resolve, reject) => {

if(allWentWell) {

resolve (‘All things went well!’);

} else {

reject (‘Something went wrong.’);

  }

});

