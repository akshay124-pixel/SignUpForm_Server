const mongoose = require("mongoose");

const URI =
  "mongodb+srv://mrakshaythakur124:Akshay0001@cluster0.mls7h5e.mongodb.net/Sign_Data";

const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectdb;
