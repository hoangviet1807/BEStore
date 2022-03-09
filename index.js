import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import post from "./routers/post.js";
import product from "./routers/product.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

const uri =
  "mongodb+srv://viet:wZasfBLAXSy07nl4@cluster0.ut0hp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "30mb",
  })
);
app.use("/", cors());

app.use("/post", post);

app.use("/product", product);

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
