import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import product from "./routers/product.js";
import user from "./routers/users.js"
import mongoose from "mongoose";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;

const uri =
  "mongodb+srv://viet:wZasfBLAXSy07nl4@cluster0.ut0hp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "30mb",
  })
);
app.use("/", cors());

app.use("/product", product);
app.use("/user", user)
app.use(express.static(__dirname + '/uploads'));

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log("listening on port " + PORT);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
