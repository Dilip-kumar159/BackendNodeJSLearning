// Creating a server using nodeJs

// Import http library/module
const http = require('http')

// creating a server
const server = http.createServer((req , res) =>{
    
    // reques is present here
    res.write("Welcome to new own Created Server by Dilip V ")

    if(req.url === '/user'){
        res.end("This is User page")
    }
    else if(req.url === '/product'){
        res.end("This is product page")
    }
    
});

// Inorder to tell that listen this server we need to use port number
const port = 5000;

server.listen(port);

console.log("server is running on port 5000")

