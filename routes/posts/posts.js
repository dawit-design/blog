const express = require("express");
const {
  createPostCtrl,
  fetchPostCtrl,
  postDetailCtrl,
  postDeleteCtrl,
  postUpdateCtrl,
} = require("../../controllers/posts/posts");
const postRoutes = express.Router();
const protected = require("../../middlewares/protected");
//POST/API/V1/posts
postRoutes.post("", protected, createPostCtrl);

//GET/API/V1/posts/
postRoutes.get("/", fetchPostCtrl);

//GET/API/V1/posts/:id
postRoutes.get("/:id", postDetailCtrl);

//DELETE/API/V1/posts/:id
postRoutes.delete("/:id", postDeleteCtrl);

//UPDATE/API/V1/posts/:id
postRoutes.put("/:id", postUpdateCtrl);

module.exports = postRoutes;
