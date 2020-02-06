/********************************************************************
 * 6 different ways to declare functions:
 * https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/
 * 
 */

// 1. Function declaration
// starts with "function"
function isEven(num) {
  return num % 2 === 0;
}
// invoke:
console.log(isEven(24));

// 2. Function expression
// statement DOES NOT START with "function" keyword. but it's there
// can be NAMED or ANONYMOUS depending on whether name is after function keyword.
const isTruthy = function(value) { // assigned to variable
  return !!value;
}
const numbers = ([1, false]).filter(function(item) { // as parameter
  return typeof item === 'number';
})
const methods = { // as method on an object
  number: [1, 5, 8],
  sum: function() {
    return this.numbers.reduce(function(acc,num) {return acc+num;}) // as callback
  }
}; // that semicolon is important! The following function expression errors without it!
(function messageFunction(message) { // invoked immediately
  return message + ' World!';
})('Hello');

// 3. shorthand method definition
// this creates named function (contrary to function expression) good for debugging.
const shortmethod = {
  items: [],
  add(...items) { // method "add"
    this.items.push(...items);
  },
  get(index) { // method "get"
    return this.items[index];
  }
};
// invoke
shortmethod.add('C','D','E');
console.log(shortmethod.get(1));
// CLASS syntax requires method declaration in short form...
class Star {
  constructor(name) {
    this.name = name;
  }
  getMessage(message) {
    return this.name + message;
  }
}
const sun = new Star('Sun');
console.log(sun.getMessage(' is shining!'));

// 4. 

// 5. 

// 6. 