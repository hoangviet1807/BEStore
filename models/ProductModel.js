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
      type: Object,
    },
    attachment: {
      type: Object,
    },
    imageDetail: {
      type: Object,
    },
    size: {
      type: Object,
      required: true,
    },
    colors: {
      type: Object,
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
