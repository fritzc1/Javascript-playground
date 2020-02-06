
    
function greet1() {
    var greeting = "hello world";
    greet2();

}
function greet2() {
    // "greeting" would not be in scope here
    console.log(greeting);
}

//greet1();

const getType = function funName(variable) {
    console.log(typeof funName === 'function');
    return typeof variable;
}

console.log(getType(3));
console.log(getType.name);
console.log(typeof funName);

