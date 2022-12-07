import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
        },
        password: {
            type: String,
        },
        name: {
            type: String,
        },
        address: {
            type: String,
        },
        phone: {
            type: Number
        }
    },
    {
        timestamps: true,
    }
);

export const UserModel = mongoose.model("User", userSchema);