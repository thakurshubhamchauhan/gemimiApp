const http = require('http');
const port = process.env.PORT | 3000
const appp = require('./appp')
 
const server = http.createServer(appp)
server.listen(3000,()=>{
    console.log('app is running on port',3000)
});