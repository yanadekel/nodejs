const express = require('express');
const router = express.Router();
const productControler = require('../controllers/products.controller');


router.post('/',(req,res)=>{
 productControler.create(req,res);
}).get('/',(req,res)=>{
  productControler.getAll(req,res);
 }).get('/active',(req,res) =>{
 productControler.getActive(req,res); 
}).get('/priceRenge',(req,res)=>{
 productControler.getRenge(req,res) 
}).get('/:id',(req,res)=>{
 productControler.getproduct(req,res);
}).put('/update/:id', (req, res)=>{
  productControler.updateActive(req,res);
}).delete('/:id', (req,res)=>{
  productControler.deleteOne(req,res);
}).delete('/', (req,res)=>{
  productControler.deleteAll(req,res);
})


module.exports = router;