const express = require('express');
const {postCtrl, postListCtrl, postDetailCtrl, postDeleteCtrl, postUpdateCtrl} = require("../../controllers/posts/posts") 
const postRoutes = express.Router();
const protected = require('../../middleware/protected');
//POST/API/V1/posts
postRoutes.post("", postCtrl);

  //GET/API/V1/posts/
  postRoutes.get("/", postListCtrl);
  
  //GET/API/V1/posts/:id
  postRoutes.get("/:id", postDetailCtrl);
  
  //DELETE/API/V1/posts/:id
  postRoutes.delete("/:id", postDeleteCtrl);
  
  //UPDATE/API/V1/posts/:id
  postRoutes.put("/:id", postUpdateCtrl);

  module.exports = postRoutes;