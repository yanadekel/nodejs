const express = require('express');
const router = express.Router();

const workers= 
   [
    {
      "id":134,
      "name":"yana d",
      "isAcrive": false

    },

    {
      "id":123,
      "name":"shai d",
      "isAcrive": false

    }
  ]


  router.get('/', (req,res)=>{
    return res.status(200).json({workers: workers})
  }).get('/:id', (req,res)=>{
    const {id} =req.params ;
    let worker = workers.find((worker)=>{
      return worker.id == id
    })
  
   if (!worker){
    return res.status(204).json({error:"worker"}) 
   }
   return res.status(200).json({worke:worker})
  
  }).post ('/', (req,res)=>{
  const {name, id} = req.body;
  let result = workers.find((worker)=> {
    return worker.id == id
  })
  
  if (!name || !id) {
    return res.status(204).json({error:"no content"})
  }
  
  else if (result) {
    return res.status(204).json({error:'worker alredy exsist'})
  }
  
  else if (name.length<6 || !name.includes(' ')){
    return res.status(204).json({error:'name must includ 5 char and space after name'})
  }
  
  workers.push({
    id,
    name,
    isActiv: false
  })
  
  return res.status(200).json({success:"new worker"})
  
  })

  module.exports = router;