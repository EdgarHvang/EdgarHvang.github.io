// let obj = require('./hellonode');
// console.log(obj)

//  process.nextTick(() => console.log("nextTick"));  
// //  console.log("event loop");

//  setTimeout(() => { console.log('timeout'); }, 0);
//  setImmediate(() => { console.log('immediate'); });
//  process.nextTick(()=> console.log('nexttick'));


// new Promise((resolve, reject) => {
//     resolve('Success!')
//   })
//   .then(() => {
//     throw Error('Oh noes!')
//   })
//   .catch(error => {
//     return "actually, that worked"
//   })
//   .catch(error => console.log(error.message))
//   .then(msg => console.log(msg)) //actually , that worked
//   .then(msg => console.log(msg)); //undefined 

console.log(' start');
async function f() {
return 1;
}
f().then(console.log);
console.log(' end');