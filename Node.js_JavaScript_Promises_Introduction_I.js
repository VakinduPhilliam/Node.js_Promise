// Node.js JavaScript Promises Introduction
// JavaScript is a single-threaded programming language - that means only one thing can happen at a time. 

// Before ES6, we used callbacks to handle asynchronous tasks such as network requests.


// Using promises, we can avoid the infamous ‘callback hell’ and make our code cleaner, easier to read, and easier
// to understand.

// Suppose we want to get some data from a server asynchronously, using callbacks, we would do something like this:


getData (function(x) {
console.log(x);

getMoreData(x, function(y) {
console.log(y);

getSomeMoreData(y, function(z) {
console.log(z);
     });
   });
});


//
// Here I am requesting some data from the server by calling the getData() function, which receives the data inside the
// callback function. 

// Inside the callback function, I am requesting for some more data by calling the getMoreData() function, passing the
// previously received data as an argument, and so on.

// This is what we call ‘callback hell’, where each callback is nested inside another callback, and each inner callback
// is dependent on its parent.

//
// We can rewrite the above snippet using promises.
//
// For example;
//

getData()

.then((x) =>
console.log(x);

return getMoreData(x);
})

.then((y) => 
console.log(y);

return getSomeMoreData(y);
})

.then((z) =>
console.log(z);
});

