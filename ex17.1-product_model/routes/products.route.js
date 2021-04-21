const express = require('express');
const router = express.Router();
const productControler = require('../controllers/products.controller');


router.get('/',async(req,res)=>{
  await productControler.getAll(req,res);
}).post('/',async(req,res)=>{
 await productControler.create(req,res);
}).get('/active',async(req,res) =>{
 await  productControler.getActive(req,res); 
}).get('/priceRenge',async(req,res)=>{
 await productControler.getRenge(req,res) 
}).get('/:id', async(req,res)=>{
 await productControler.getproduct(req,res);
})

module.exports = router;