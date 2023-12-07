const mongoose = require("mongoose");

//title, desc, catagory, image
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    catagory: {
      type: String,
      required: true,
      enum: ["react js", "html", "css", "node js", "javascript", "other"],
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//compile shcmea to form model

const Post = mongoose.model("Post", postSchema);

//export model
module.exports = Post;
