const http = require('http');
const port = process.env.PORT | 5000;
const appp = require('./appp')
 
const server = http.createServer(appp)
server.listen(5000,()=>{
    console.log('app is running on port',5000)
});