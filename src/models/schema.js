const mongoose = require("mongoose");

// Define the schema of Mens
const mensSchema = new mongoose.Schema({
  rank: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: String,
    required: true,
    trim: true,
  },
  event: {
    type: String,
    default: "100m",
  },
});

const Mens = mongoose.model("Mens", mensSchema);

module.exports = Mens;
