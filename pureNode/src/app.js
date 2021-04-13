const path = require("path");
const http = require("http");
const url = require("url");
const fs = require('fs');
const users = require('./users.json');
const port = 3000;

const publicDirectory = path.join(__dirname, '../public');


const server = http.createServer((req, res) => {


  if (req.method === "GET") {
    
    if (req.url=== "/") {
      res.writeHead(200, {'Content-Type': 'text/html'})
      fs.readFile('./src/index.html',null, function(error, data){
        if (error){
          res.writeHead(404);
          res.write('File not found');
        }else {
          res.write(data);
        }
       res.end();
      })
    }
    else if (req.url === "/raw-html") {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end("<h1>welcom<h1>");
     
    }
    else if (req.url === '/users') {
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(users));
      
    }

 
  }
})

server.listen(port, () => {
  console.log("server run at port" + port)
})
