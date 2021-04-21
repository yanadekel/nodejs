
const productModel = require('../models/products.model');


const createProduct = async (req, res) => {

  const { productName, category, isActive, details } = req.body;

  const product = new productModel({
    productName: productName,
    category: category,
    isActive: isActive,
    details: details
  });

  try {
    await product.save();
    res.status(201).send(product);

  } catch (e) {
    res.status(400).send(e);
  }
}

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find({})
    return res.send(products)

  } catch (e) {
    res.status(500).send()
  }
}


const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).send("Wrong ID");
    }
    return res.status(200).send(product)

  } catch (e) {
    return res.status(500).send()
  }

}

const getProductsByActive = async (req, res) => {
  const isActive = req.query.isActive;
  try {
    const products = await productModel.find({ isActive: isActive });
    return res.status(200).send(products)

  } catch (e) {
    res.status(500).send();
  }

}

const getProductsByPrice = async (req, res) => {
  const price = req.query;
  try {
    // productModel.find({ $and: [ { "details.price": { $gte: price.min } }, { "details.price": { $lte: price.max } } ] })
    const products = await productModel.find({ 'details.price': { $gt: price.min, $lt: price.max } });
    res.status(200).send(products);
  } catch (e) {
    res.status(500).send();
  }
 
}




module.exports = {
  create: createProduct,
  getAll: getProducts,
  getproduct: getProductById,
  getActive: getProductsByActive,
  getRenge: getProductsByPrice
}