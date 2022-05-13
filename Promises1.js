/********************************************************************
 * Sample of registering functions using .then() and .catch() on a 
 * promise.
 * 
 * https://www.geeksforgeeks.org/javascript-promises/
 * Promises can be consumed by registering functions using .then and .catch methods.
 */

var promise = new Promise(function(resolve, reject) { 
  //reject('Promise Rejected') 
  resolve('Promise Resolved')
}) 

promise 
.then(function(successMessage) { 
  console.log("then:" + successMessage); 
  return "pass to next then";
})
.then(myPromiseFunc)
.then(myPCChange)
.then(myConflictChg)
.catch(function(errorMessage) { 
  //error handler function is invoked 
  console.log("catch:" + errorMessage); 
});

makeAPromise('thismsg').then(myPromiseFunc)



function myPromiseFunc(successMessage) {
  console.log("then2" + successMessage);
  return (successMessage)
}
function myPCChange(successMessage) {
  console.log("then3" + successMessage);
  return (successMessage)
}
function myConflictChg(successMessage) {
  console.log("thenC" + successMessage);
}

function makeAPromise(message) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log('do stuff');
      resolve(message);
    }, 1000);
  })
}