const { error } = require("console");
const express = require("express");
const path = require("path");
const productRouter = require('./routers/productRouter')
const userRouter = require('./routers/userRouter')

const app = express();

app.set('port', process.env.PORT || 3500);
console.log('listening to', app.get('port'))
app.listen(3500);

app.use(express.urlencoded({extended: true})); 
console.log(__dirname)
app.use('/products',productRouter);
app.use('/formStyle',express.static(path.join(__dirname),"public","css"))
// console.log('/styles',express.static(path.join(__dirname)));
app.use("/user",userRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

