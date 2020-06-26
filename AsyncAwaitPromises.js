(async () => { // wrap in func to use await!

let aval
try {
  aval = testfunc();
} catch (err) {
  console.log('caught ' + err );
}
// log a value immed after func call.
console.log(aval);
// show value every 1ms
let int1 = setInterval(() => {console.log(aval)},1);
// after "n" ms, stop showing the value (and clear this interval too)
let int2 = setInterval(() => {clearInterval(int1); clearInterval(int2);},20);

})(); // wrap in func to use await!

// a function that can resolve or reject a promise, or throw an error!
async function testfunc() {
  /* resolving the promise will return the string "test resolve" in aval. 
   * Without "await", the promise is not unwrapped, and you'll get a Pending promise on the first log.
   * eventually a Resolved promise with contents "test resolve"
   */
  //return new Promise((res, rej) => res('test resolve') );

  /* rejecting the promise will return the string "test resolve" in aval, with await. The .catch() block gets control. 
   * Without "await", the promise is not unwrapped, and you'll get a Pending promise on the first log.
   * NOTE the .catch() will NOT CATCH a promise that is rejected, but not waited for.
   * When "aval" is evaluated in the try block, it's just a PENDING promise object!!
   * Only later is it rejected, and probably you will get an "UnhandledPromiseRejectionWarning: test a reject"
   */
  //return new Promise((res, rej) => rej('test a reject') );

  /* Throwing an error will always cause the .catch() block to gain control, and "err" will be the value thrown.
   */
  //throw "hey I'm an error!"

  /* If you return a regular value what happens?
   */
  return 5;
}