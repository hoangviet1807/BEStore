import { ProductModel } from "../models/ProductModel.js";

export const getProduct = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const product = new ProductModel(newProduct);
    await product.save();

    res.status(200).json({ "message:": "Thành công" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updateProduct = req.body;
    const post = await ProductModel.findOneAndUpdate(
      {
        _id: updateProduct._id,
      },
      updateProduct,
      {
        new: true,
      }
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

export const getDetailProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).send(error.Message);
  }
};

export const getDataAFollowingType = async (req, res) => {
  try {
    const products = await ProductModel.find({
      category: req.params.category.toUpperCase(),
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(404).send(error.Message);
  }
};
