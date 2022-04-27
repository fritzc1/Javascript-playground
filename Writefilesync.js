const fs = require('fs')
const util = require('util')

const testFunc1 = async () => {
  fs.writeFileSync('text.txt', 'hello world')
  console.log('file write done with writeFileSync')
}

const writeFilePromisified = util.promisify(fs.writeFile)

const testFunc2 = async () => {
  await writeFilePromisified('text.txt', 'hello world')
  console.log('file write done with promisified writeFile')
}

console.log('start test1')
testFunc1().then(() => {
  console.log('promise 1 is fullfiled')
})
console.log('start test2')
testFunc2().then(() => {
  console.log('promise 2 is fullfiled')
})
console.log('stop')