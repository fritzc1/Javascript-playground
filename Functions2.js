/**
 * Test whether you can modify function arguments passed into a funciton
 * (parameters are ALWAYS passed by VALUE in JS!)
 */

const myfunc1 = (p1) => { 
    console.log('In f() p1:', p1)
    p1 = 'changed';
    console.log('In f() p1:', p1)
    return p1;
}

arg = 'new string arg';
console.log('Before f() arg:', arg)
ret = myfunc1(arg);
console.log('After f() arg:', arg)
console.log('After f() ret:', ret)
console.log('=========================')


/**
 * Now, if you pass the value inside an object, the OBJ is passed by "value",
 * but since the value is actually the reference to the object, if you 
 * change the value inside the object, it'll change the outer variable.
 */

 const myfunc2 = (o1) => { 
    console.log('In f() p1:', o1.arg)
    o1.arg = 'changed';
    console.log('In f() p1:', o1.arg)
    return o1.arg;
}

o1 = {
    arg: 'new string arg'
}
console.log('Before f() arg:', o1.arg)
ret = myfunc2(o1);
console.log('After f() arg:', o1.arg)
console.log('After f() ret:', ret)
console.log('=========================')