// Node.js JavaScript Promises

// A promise can be resolved or rejected only once. 

// Further invocation of resolve() or reject() has no effect on Promise state.

//
// For example;
//

const promise = new Promise ((resolve, reject) => {

resolve (‘Promise resolved’); // Promise is resolved

reject (‘Promise rejected’); // Promise can’t be rejected

});


//
// Since resolve() is called first, so the Promise will be resolved.

// Calling reject() after that will have no effect on the Promise state.

//

