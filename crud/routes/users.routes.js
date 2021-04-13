const express = require('express');
const router = express.Router();
const userJson = require('../users.json');
const users = [
  {"id": 0, "name": "Netanel","capsule":5},
  {"id": 1, "name": "Zehave","capsule":5},
  {"id": 2, "name": "Mirale","capsule":5},
  {"id": 3, "name": "David","capsule":5},
  {"id": 4, "name": "Yanna","capsule":5},
  {"id": 5, "name": "Foad","capsule":5},
  {"id":13, "name":"toot", "capsule":5},
  {"id": 6, "name": "Shir", "capsule": 1},
  {"id": 7, "name": "Talya", "capsule": 1},
  {"id": 8, "name": "Gilad", "capsule": 1},
  {"id": 9, "name": "Guy", "capsule": 1},
  {"id": 10, "name": "Michael", "capsule": 1},
  {"id": 11, "name": "Osama", "capsule": 1},
  {"id": 12, "name": "Eyal Dar", "capsule": 1}

]



router.get('/', (req,res)=>{
  return res.status(200).json({users: users})
}).get('/:id', (req,res)=>{
  return res.status(200).json( {user: users[req.params.id]})

}).post ('/', (req,res)=>{
const {name, capsule} = req.body;

users.push({
  id:users[users.length-1].id+1,
  name:name,
  capsule:capsule
})
return res.status(200).json({success:"user added"})


}).put('/:id',(req,res)=>{
  const {id} = req.params;
  const {capsule} = req.body;
  

if(!capsule || id<0) {
  res.status(204).send("error")
}

let user = users.find((u)=>{
  return u.id==id
})

if(!user) {
  res.status(204).send("error")
}

users[id].capsule= capsule
res.status(200).send("capsul changed")


}).delete('/:id', (req, res)=>{
  const { id } = req.params;
    users = users.filter(user => user.id != id)
    return res.status(200).json({ success: 'user deleted' })

})



module.exports = router;