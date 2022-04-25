/**
 * Various tests to play with Javascript Objects (JSON)
 */

// assign an object literal and read out it's immediate props.
let obj1 = {
    name: 'chris',
    age: 34
}
console.log('obj1:',obj1); // just output the whole obj
for (let prop in obj1) {
    console.log(`obj1.${prop}=${obj1[prop]}`); // output each prop individually
}

// create an object with a nested object
let obj2 = {
    name: 'nest1',
    obj3: {
        name: 'nest2',
        age: 34
    }
}

console.log('obj2:',obj2);
console.log('obj3:',obj2.obj3);

// copy obj2 with nested obj
let obj4 = { ...obj2 }

// demonstrate that obj3 is the same instance in obj2 and 4
obj4.obj3.name = 'nest3';

console.log('obj2:',obj2);
console.log('obj4:',obj4);

// how can i update just one prop out of two in obj3, the nested object?
