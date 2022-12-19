import { OrdersModel } from "../models/OrdersModel.js";
import dotenv from 'dotenv'
import Mailgun from "mailgun-js";
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()


export const getOrders = async (req, res) => {
    try {
        const orders = await OrdersModel.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
};

export const createOrder = (req, res) => {
    try {
        // const order = req.body
        const output = fs.readFileSync(path.resolve(__dirname, '../html/mail.html')).toString();
        var transporter = nodemailer.createTransport({ // config mail server
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'hoangviet1807@gmail.com', // generated ethereal user
                pass: 'udtkcioiitqidrep', // generated ethereal password
            },
        });
        var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
            from: 'hoangviet1807@gmail.com',
            to: body.req.email,
            subject: 'Order confirmed',
            html: output
        }
        transporter.sendMail(mainOptions, function (err, info) {
            if (err) {
                console.log(err);
                res.status(500).send({ message: 'OK' });
            } else {
                console.log('Message sent: ' + info.response);
                res.send({ message: 'OK' });
            }
        });

        // await order.save().then(() => res.status(200).json({ "message:": "Thành công" }))
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
};
