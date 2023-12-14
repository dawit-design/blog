const express = require("express");

const userRoutes = express.Router();

//POST/API/V1/USERS/REGISTER
userRoutes.post("/api/v1/users/register", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Registered",
    });
  } catch (error) {
    res.json(error);
  }
});

//POST/API/V1/USERS/LOGIN
userRoutes.post("/api/v1/users/login", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Logged In",
    });
  } catch (error) {
    res.json(error);
  }
});
//GET/API/V1/USERS/:id
userRoutes.get("/api/v1/users/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Details",
    });
  } catch (error) {
    res.json(error);
  }
});
//GET/API/V1/USERS/profile/:id
userRoutes.get("/api/v1/users/profile/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Details",
    });
  } catch (error) {
    res.json(error);
  }
});

//PUT/API/V1/USERS/profile-photo-upload/:id
userRoutes.put("/api/v1/users/profile-photo-upload/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Profile Image Upload",
    });
  } catch (error) {
    res.json(error);
  }
});

//PUT/API/V1/USERS/cover-photo-upload/:id
userRoutes.put("/api/v1/users/cover-photo-upload/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Cover Image Upload",
    });
  } catch (error) {
    res.json(error);
  }
});

//PUT/API/V1/USERS/update-password/:id
userRoutes.put("/api/v1/users/update-password/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Password Update",
    });
  } catch (error) {
    res.json(error);
  }
});

//GET/API/V1/USERS/logout/:id
userRoutes.get("/api/v1/users/logout/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Logout",
    });
  } catch (error) {
    res.json(error);
  }
});


module.exports = userRoutes;