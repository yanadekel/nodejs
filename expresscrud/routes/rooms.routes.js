const express = require('express');
const router = express.Router();

const rooms= [
  {
    "num":5,
    "capasity":3,
    "isActiv": false,
    // "name":"smartass"

  }
]


router.get ('/', (req, res) =>{
  return res.status(200).json({rooms:rooms});
  
})

router.post ('/', (req, res)=>{
 
  const { num, capasety} = req.body;
  let result = rooms.find((room)=> {
    return room.num == num;
  })

  if(!num || !capasety) {
    return res.status(204).json({error:"no content"}) 
  }
  else if (result) {
    return res.status(204).json({error:'room alredy exsist'})
  }
  rooms.push({
   capasety,
    isActiv: false,
    num
  })

  return res.status(200).json({success:"new room"})

}).get('/:workerId')

module.exports = router;