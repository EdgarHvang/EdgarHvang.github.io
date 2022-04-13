const express = require("express");
const app = express();

console.log(app.get('port'));
// console.log(app.get('port'));

app.use((req, res, next) => {
    console.log("this middle ware always run")
    next();
})

// app.use('/add-product', (req, res, next) => {
//     console.log('In the middleware!');
//     res.send('<h1>The "Add Product" Page</h1>');
    
// })


// app.use('/', (req, res, next) => {
//     console.log('In another middleware!');
//     res.send('<h1>Hello from Express</h1>');
// });