let var1, var2 = [1,2];

console.log(var1); // undefined
console.log(var2); // [ 1, 2 ]

{ // create a scope to define variables in
    let var1 = 5, var2 = 6;
    console.log(var1); // 5
    console.log(var2); // 6
}

process.exit(0);