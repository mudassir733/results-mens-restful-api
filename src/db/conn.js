// **Database Connection** (Assuming a separate file for database connection)
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/olympics", {}) // Connect to the database (MongoDB or other)
  .then(() => {
    console.log("Mongodb is connected successfully");
  })
  .catch((err) => {
    console.log(`Cannot connect to mongodb ${err}`);
  });
