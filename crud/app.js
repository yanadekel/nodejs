// const http = require("http");
// const url = require("url");
// const usersJson = require("./users.json");
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const port = 8002;
const usersRoute = require('./routes/users.routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/users', usersRoute)

app.listen(port,()=>{
  console.log(`application start at ${port}`)
})

// const server = http.createServer((req, res) => {
//   const q = url.parse(req.url, true).query;

//   console.log(q);

//   if (req.method === "GET") {
  //   if (req.url === "/getHey")
  //     res.write("welcom");
  // }
  // else if (req.url === "/getUsers") {
  //   res.write(JSON.stringify(users))
  // }
  // else if (req.url.includes('user')) {
  //   res.write(JSON.stringify(users[q.id]));
  // }
//    if (req.url.includes('id')) {
//     let user = usersJson.users.find(ele => ele.id == q.id)
//     res.write(JSON.stringify(user))
//   }
//   else if (req.url.includes('cap')) {
//     let user = usersJson.users.filter(ele => ele.capsule == q.cap)
//     res.write(JSON.stringify(user))
//   }

// }


//   res.end();
// })
  
// server.listen(port, () => {
//   console.log("server run at port" + port)
// })

