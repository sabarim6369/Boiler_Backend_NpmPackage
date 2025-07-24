const mongoose = require("mongoose");

const connectDB = () =>
  mongoose
    .connect("mongodb://localhost:27017/graphql")
    .then(() => console.log("Connected successfully"))
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      process.exit(1); // optional: exit if DB connection fails
    });

module.exports = connectDB;
