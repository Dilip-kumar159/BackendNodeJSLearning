const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{

    const data = fs.readFileSync('index.html')

    res.end(data)
});

const port = 5000;

server.listen(port, ()=>{
    console.log("Server is running on the port 5000")
});

