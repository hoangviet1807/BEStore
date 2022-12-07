
import { UserModel } from "../models/UsersModel.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const register = async (req, res) => {
    try {
        const newUser = req.body;
        const user = await UserModel.find({
            username: newUser.username,
        });
        if (user.length > 0) {
            res.status(400).json({ "message": "Username already exist" });
        }
        else {
            let user = new UserModel(newUser)
            user.save()
            res.status(200).json({ "message": "Create account successfully" })
        }
    } catch (error) {
        res.status(500).json({
            error: error,
        });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();

        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
};

export const login = async (req, res) => {
    try {
        const account = req.body;
        const user = await UserModel.findOne({
            username: account.username,
            password: account.password,
        });
        if (user) {
            const accessToken = jwt.sign(account.username, process.env.ACCESS_TOKEN_SECRECT)
            res.status(200).json({ accessToken })
        }
        else {
            res.status(400).json({ "message": "username or password incorrect" })
        }
    }
    catch (error) {
        res.status(500).json({
            error: error,
        });
    }
}


export const searchUser = async (req, res) => {
    try {
        const search = req.params.searchText
        const query = { username: { $regex: search } }
        const cursor = await UserModel.find(query);
        res.status(200).json(cursor)
    } catch (error) {
        res.status(500).json({
            error: error,
        });
    }
};