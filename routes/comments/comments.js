const express = require("express");
const {
  commentsCtrl,
  commentDetailsCtrl,
  deleteCommentCtrl,
  updateCommentCtrl,
} = require("../../controllers/comments/comments");
const protected = require("../../middlewares/protected");
const commentRoutes = express.Router();

//POST/API/V1/comments
commentRoutes.post("/:id", protected, commentsCtrl);

//GET/API/V1/comments/:id
commentRoutes.get("/:id", commentDetailsCtrl);

//DELETE/API/V1/comments/:id
commentRoutes.delete("/:id",protected, deleteCommentCtrl);

//UPDATE/API/V1/comments/:id
commentRoutes.put("/:id", updateCommentCtrl);

module.exports = commentRoutes;
