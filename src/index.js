
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const route = require("./routes/route");

const app = express();

app.use(cors());

app.use(express.json());


dotenv.config();
mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

  app.use("/", route);

const PORT = 8000;
app.listen(process.env.PORT || PORT, () => {
  console.log(`server is running on ${process.env.PORT || PORT}`);
});
