const { ObjectID } = require('bson');
const productModel = require('../models/products.model');


const createProduct = (req, res) => {

  const { productName, category, isActive, details } = req.body;

  const product = new productModel({
    productName: productName,
    category: category,
    isActive: isActive,
    details: details
  });
  product.save((err) => {
    if (err) return res.json({ "error": err })
    return res.json({ "success": product })
  });

}

const getProducts = (req, res) => {
  productModel.find({}).then((products) => {
    return res.send(products)
  });
}


const getProductById = (req, res) => {
  const {id} = req.params;
  productModel.findById(id).then((product) => {
    if (!product){
      return res.status(404).send("Wrong ID");  
    }
    return res.status(200).send(product)
  }).catch ((error)=>{
    return res.status(500).send(error)
  })
}

const getProductsByActive = (req,res) => {
  const isActive = req.query.isActive;
  productModel.find({isActive: isActive}).then ((products) =>{
    res.status(200).send(products);
  }).catch((error)=>{
    res.status(500).send(error);
  })
}

const getProductsByPrice = (req,res) =>{
  const price =req.query;
  console.log(price)
  // productModel.find({ $and: [ { "details.price": { $gte: price.min } }, { "details.price": { $lte: price.max } } ] })
  productModel.find({ 'details.price': { $gt: price.min, $lt: price.max } })
  .then ((products) =>{
    res.status(200).send(products);
  }).catch((error)=>{
    res.status(500).send(error);
  })
}




module.exports = {
  create: createProduct,
  getAll: getProducts,
  getproduct: getProductById,
  getActive: getProductsByActive,
  getRenge: getProductsByPrice
}