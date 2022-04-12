const { error } = require("console");
const fs = require("fs");
const server = require("http").createServer();

server.on('request',(req,res)=>{
    const src = fs.readFile('./largePic.jpg',(error,data)=>{
        if (error) throw error;
        res.end(data);
    });
})

server.listen(3401,()=>{
    console.log("listenning to port 3401");
});
