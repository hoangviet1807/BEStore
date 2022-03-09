import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    id:{
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    info: {
      type: Array,
      required: true,
    },
    attachment: String,
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const PostModel = mongoose.model("Posts", schema);
