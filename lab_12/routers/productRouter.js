const express = require("express");
const path = require("path");

const router = express.Router();


router.get('/add',(req,res,next)=>{
  console.log(req.query);
  console.log(req.params);
  res.sendFile(path.join(__dirname,"..","views",'productForm.html'));

})


router.post('/save',(req,res,next)=>{
    console.log('params:',req.params);//  /name/:name/id/:id
    console.log('query:',req.query); //   name=sfaf&&id=1233&&sa=fasdfs
    const postData = req.body;
    console.log('postData',postData);
    res.send("product is saved")
})






module.exports = router;