/**
 * Create a web server that's going to send a response of big image (bigger then 3MB)
 *  to any client that sends a request to your specified server:port.
 *  Use the best way for performance. (Try to solve this in many different ways)
 */

const fs = require("fs");
const server = require("http").createServer();

server.on('request',(req,res)=>{
    const src = fs.createReadStream('./largePic.jpg');
    src.pipe(res);
})

server.listen(3400,()=>{
    console.log("listenning to port 3400");
});

