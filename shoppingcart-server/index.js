const express = require("express");
const productRouter = require('./routers/productRouter');


const app = express();
app.use(express.json());
app.use("/products",productRouter); //"add '/products ahead of router's url'"

app.use((req,res,next)=>{
    res.status(404).json({
        error:req.url + 'API not supported'
    })
})

app.use((error,req,res,next)=>{
    if(error.message === 'NOT found'){
        res.status(404).json({error: error.message});
    }else{
        res.status(500).json({
            error: 'something is wrong! Try later'
        })
    }
})


app.set('port', process.env.PORT || 4000);
console.log('listening to', app.get('port'))
app.listen(4000);

