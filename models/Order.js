import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        guessName: {
            type: String,
            required: true,
        },
        address: {
            type: Object,
            required: true,
        },
        product: {
            type: Object,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Order = mongoose.model("Order", schema);
