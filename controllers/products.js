import { ProductModel } from "../models/ProductModel.js";

import multer
  from "multer";
import fs from 'fs'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});
var upload = multer({
  storage: storage
}).array('attachment');



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
  await upload(req, res, (err) => {
    if (err) {
      console.log("err");
    }
    else {
      var attachment = []
      req.files.map((val) => {
        attachment.push({
          fileName: val.filename,
        })
      })
      const product = new ProductModel(
        {
          name: req.body.name,
          price: req.body.price,
          size: req.body.size.split(','),
          colors: req.body.colors.split(','),
          category: req.body.category,
          quantity: req.body.quantity,
          attachment
        })
      product.save().then(() => res.status(200).json({ "message:": "Thành công" }))
    }
    // res.status(200).json({ "message:": "Thành công" })
  })
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

export const searchProduct = async (req, res) => {
  try {
    const searchText = req.params.searchText
    const query = { name: { $regex: new RegExp(searchText, "i") } }
    const products = await ProductModel.find(query);
    res.status(200).json(products);
  } catch (error) {
    res.status(402).send(error.Message);
  }
};



export const updateMessage = async (req, res) => {
  try {
    const data = req.body
    let message = {}
    if (data.image) {
      message = {
        "sender": data.sender,
        "timestamps": data.timestamps,
        "image": {
          data: fs.readFileSync(path.join(__dirname + '/uploads/' + data.image)),
          contentType: 'image/png'
        }
      };

    }
    else {
      message = {
        "sender": data.sender,
        "message": data.message,
        "timestamps": data.timestamps
      };
    }
    console.log(message);
    res.status(200).json({ "Message": message })
  }
  catch (error) {
    res.status(500).json({
      error: "loi ne"
    })
  }
}