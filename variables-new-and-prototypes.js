/**
 * variables-New.js
 *
 * Purpose: Test the behaviors of the "new" operation for creating a
 * new instance of an object. Also test how the "prototype" chain works.
 *
 */

// Define the constructor function that "new" will call.
function Constructor(name, bday) {
    this.name = name;
    this.birthday = bday;
}


// create a new object, and an object literal to compare it to.
console.log('-> create instance1')
let instance1 = new Constructor("Chris", "December");
console.log('-> create objLiteral')
let objLiteral = {
    name: 'test',
    birthday: 'tdate'
}

// log out the props of the objects created
console.log('-> Objects before prototypes have had props added');
console.log('==============')
console.log('=> objLiteral:')
console.log(objLiteral);
console.log('getProtoOf:', Object.getPrototypeOf(objLiteral));
console.log('=============')
console.log('=> instance1:')
console.log(instance1);
console.log('getProtoOf:', Object.getPrototypeOf(instance1));

console.log('-> ADD prop "test" to prototype of each object')
Constructor.prototype.test = 'proto test value FROM CONSTRUCTOR';
objLiteral.__proto__.test = 'proto test value FROM OBJ LITERAL';

console.log('-> create instance2')
let instance2 = new Constructor("Erika", "January");
console.log('-> Objects after prototypes have had props added');
console.log('==============')
console.log('=> objLiteral:')
console.log(objLiteral);
console.log('getProtoOf:', Object.getPrototypeOf(objLiteral));
console.log('objLiteral.test=', objLiteral.test);
console.log('=============')
console.log('=> instance1:')
console.log(instance1);
console.log('getProtoOf:', Object.getPrototypeOf(instance1));
console.log('instance1.test=', instance1.test); // the prop exists when the object is created before the prototype prop is set
console.log('=============')
console.log('=> instance2:')
console.log(instance2);
console.log('getProtoOf:', Object.getPrototypeOf(instance2));
console.log('instance2.test=', instance2.test); // the prop exists when the object is created after the prototype prop is set

// Now we get into the weird stuff. Set the prototype.
console.log('-> Set the prototype of "objLiteral" to a new "Constructor" type object, with the prop "proto"')
Object.setPrototypeOf(objLiteral, new Constructor('proto', 'proto'));
console.log('==============')
console.log('=> objLiteral:')
console.log(objLiteral);
console.log('getProtoOf:', Object.getPrototypeOf(objLiteral));
console.log('objLiteral.test=', objLiteral.test); // Now, the "test" prop is found in objLiteral.__proto__(Constructor).prototype.test!

