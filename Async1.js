// Test what is synchronous and asynchronous here!

let val = 1 + 1;
console.log('val in mainline:'+val);
console.log("that was synchronous");

let val2;
setTimeout(() => calcval2(),1000);
console.log('val2 in mainline:'+val2);
console.log("that was ??");

function calcval2() {
  val2 = 2 + 2;
  console.log('val2 in func:'+val2);
}