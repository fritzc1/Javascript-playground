/**
 * Purpose: Illustrate the most basic promises usage patterns
 */

var mypromise = new Promise( (resolve, reject) => {
  resolve("my promise");
})

var globalVar = 'testing'

mypromise
  .then( // this "then" would act like a .catch if the "resolve handler" was null
    (result) => {
      console.log(`Resolved woo! first .then arg passed in: ${result}`);
      globalVar = globalVar + ' testing'
      return "resolve handler return"
    }, // <= resolve handler
    (result) => console.log(result + " was rejected") // <= reject handler
  )
  .then( // 2nd .then - Executes after 1st .then - handler MUST be a function!
    (a) => {
      console.log(`Chained .then, arg passed in: ${a}`);
      callbackSomething(theCallback)
    } // call our function and pass callback function in
  );

function callbackSomething(myCall) {
  globalVar = globalVar + ' 1' // modify a global variable from a function
  myCall(' hi');
}

function theCallback(parm) {
  globalVar = globalVar + ' 2' + parm // modify a global variable from the callback function
  console.log(`Final callback: ${globalVar}`);
}

console.log(`End of file: ${globalVar}`);
