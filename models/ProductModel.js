import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    infoProduct: {
      type: Array,
      required: true,
    },
    attachment: String,
    imageDetail: {
      type: Array,
    },
    size: {
      type: Array,
      required: true,
    },
    colors: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = mongoose.model("Products", schema);
