
const productModel = require('../models/products.model');

const hila = ()=>{

}
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

const updateActiveById = async (req, res) => {
  const updates = Object.keys(req.body);
  const alloweUpdates = ["isActive", "discount"];
  const isValidOpertion = updates.every((update) => alloweUpdates.includes(update));

  if (!isValidOpertion) {
    return res.status(400).send({ error: 'Invelid updates' })
  }

  try {

    const product = await productModel.findByIdAndUpdate
      (req.params.id, { isActive: req.body.isActive, "details.discount": req.body.discount }, { new: true, runValidators: true });

    if (!product) {
      return res.status(404).send("not such product")
    }
    res.status(200).send(product)
  } catch (e) {
    res.status(400).send('invelid');
  }

}

  const deletProductById = async (req, res) => {
    try {
      const product = await productModel.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).send("You have been enter unexisting ID");
      }
      res.send(product);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const deleteAll = async (req, res) => {
    try {
      const response = await productModel.deleteMany({});
      res.send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  };



module.exports = {
  create: createProduct,
  getAll: getProducts,
  getproduct: getProductById,
  getActive: getProductsByActive,
  getRenge: getProductsByPrice,
  updateActive: updateActiveById,
  deleteOne: deletProductById,
  deleteAll:deleteAll
}