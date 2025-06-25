const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook"; // replace with your actual DB name

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

module.exports = connectToMongo;
