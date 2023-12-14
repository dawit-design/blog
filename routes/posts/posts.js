const express = require('express');

const postRoutes = express.Router();

//POST/API/V1/posts
postRoutes.post("", async (req, res) => {
    try {
      res.json({
        status: "successs",
        user: "Post Created",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  //GET/API/V1/posts/
  postRoutes.get("/", async (req, res) => {
    try {
      res.json({
        status: "successs",
        user: "Post List",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  //GET/API/V1/posts/:id
  postRoutes.get("/:id", async (req, res) => {
    try {
      res.json({
        status: "successs",
        user: "Post Details",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  //DELETE/API/V1/posts/:id
  postRoutes.delete("/:id", async (req, res) => {
    try {
      res.json({
        status: "successs",
        user: "Post Deleted",
      });
    } catch (error) {
      res.json(error);
    }
  });
  
  //UPDATE/API/V1/posts/:id
  postRoutes.put("/:id", async (req, res) => {
    try {
      res.json({
        status: "successs",
        user: "Post Updated",
      });
    } catch (error) {
      res.json(error);
    }
  });

  module.exports = postRoutes;