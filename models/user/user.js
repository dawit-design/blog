const { timeStamp } = require("console");
const mongoose = require("mongoose");

//Schema
const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
    coverImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//compile the schema to form a model
const User = mongoose.model("User", UserSchema);

module.exports = User;
