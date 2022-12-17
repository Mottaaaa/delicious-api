const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

console.log(process.env.NODE_ENV);

// Body-parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", require("./api"));

const dbConnectionString =
  process.env.NODE_ENV === "production"
    ? process.env.DATABASE_CONNECTION_STRING_PROD
    : process.env.DATABASE_CONNECTION_STRING_DEV;

mongoose
  .set("strictQuery", false)
  .connect(dbConnectionString)
  .then(() => console.log("Database Connected!"))
  .catch((error) => console.log(error));

const port = process.env.API_PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
