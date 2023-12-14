const express = require("express");

const commentRoutes = express.Router();

//POST/API/V1/comments
commentRoutes.post("/api/v1/comments", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Comment Created",
    });
  } catch (error) {
    res.json(error);
  }
});

//GET/API/V1/comments/:id
commentRoutes.get("/api/v1/comments/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Comment Details",
    });
  } catch (error) {
    res.json(error);
  }
});

//DELETE/API/V1/comments/:id
commentRoutes.delete("/api/v1/comments/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Comment Deleted",
    });
  } catch (error) {
    res.json(error);
  }
});

//UPDATE/API/V1/comments/:id
commentRoutes.put("/api/v1/comments/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Comment Updated",
    });
  } catch (error) {
    res.json(error);
  }
});


module.exports = commentRoutes;