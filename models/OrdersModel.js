import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        customerName: {
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
        status: {
            type: Boolean,
            default: false
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        note: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

export const OrdersModel = mongoose.model("Orders", schema);
