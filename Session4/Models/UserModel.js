const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  age: {
    type: Number,
    required: true,
    min: 18
  },

  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"]
  },

  contact: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  },

  nationality: {
    type: String
  }

}, { timestamps: true });

const UserModel = mongoose.model("User", userSchema)
// User is the acual name of the MONGO DB collection

module.exports = UserModel