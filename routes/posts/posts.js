const express = require("express");
const multer = require("multer");
const storage = require("../../config/cloudinary");
const {
  createPostCtrl,
  fetchPostCtrl,
  postDetailCtrl,
  postDeleteCtrl,
  postUpdateCtrl,
} = require("../../controllers/posts/posts");
const postRoutes = express.Router();
const protected = require("../../middlewares/protected");

//instance of multer
const upload = multer({
  storage, 
})
//POST/API/V1/posts
postRoutes.post("", protected, upload.single('file'), createPostCtrl);

//GET/API/V1/posts/
postRoutes.get("/", fetchPostCtrl);

//GET/API/V1/posts/:id
postRoutes.get("/:id", postDetailCtrl);

//DELETE/API/V1/posts/:id
postRoutes.delete("/:id", postDeleteCtrl);

//UPDATE/API/V1/posts/:id
postRoutes.put("/:id", postUpdateCtrl);

module.exports = postRoutes;
