const express = require("express");
const router = express.Router();

router.get('/user',(req,res,next)=>{
    res.send('inside get /user');
})

router.post('/user',(req,res,next)=>{
    res.send('inside post /user');
})

router.all('/user',(req,res)=>{
    res.send("inside All /user");
})

router.get("/user/:uid/posts/:pid",()=>{
    console.log('params:', req.params);
    console.log('query string',req.query);
    res.send('something here...');
})

module.exports = router;