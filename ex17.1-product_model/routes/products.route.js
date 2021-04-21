const express = require('express');
const router = express.Router();
const productControler = require('../controllers/products.controller');


router.get('/',(req,res)=>{
 productControler.getAll(req,res);
}).post('/',(req,res)=>{
 productControler.create(req,res);
}).get('/active',(req,res) =>{
 productControler.getActive(req,res); 
}).get('/priceRenge',(req,res)=>{
 productControler.getRenge(req,res) 
}).get('/:id',(req,res)=>{
 productControler.getproduct(req,res);
})

module.exports = router;