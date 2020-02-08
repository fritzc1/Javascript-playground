var mypromise = new Promise( (resolve, reject) => {
  resolve("my promise");
})

var globalVar = 'testing'

mypromise
  .then( // this "then" WOULD like a "catch" if the resolve handler was null
    (result) => console.log(result + " was resolved woo!"), // resolve handler
    (result) => console.log(result + " was rejected") // reject handler
  )
  .then( // 2nd then.. handler MUST BE A FUNCTION!!!
    () => {callbackSomething(theCallback)} // call our function and pass callback function in
  );

function callbackSomething(myCall) {
  globalVar = globalVar+'1' // modify a global variable from a function
  myCall('hi');
}

function theCallback(parm) {
  globalVar = globalVar+'2' // modify a global variable from the callback function
  console.log(globalVar);
}

