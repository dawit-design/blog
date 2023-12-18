const express = require("express");
const {
  registerCtrl,
  loginCtrl,
  userDetailsCtrl,
  userProfileCtrl,
  logoutCtrl,
  passwordUpdateCtrl,
  profileImageCtrl,
  coverImageCtrl,
} = require("../../controllers/users/users");
const protected = require("../../middlewares/protected")
const userRoutes = express.Router();

//POST/API/V1/USERS/REGISTER
userRoutes.post("/register", registerCtrl);

//POST/API/V1/USERS/LOGIN
userRoutes.post("/login", loginCtrl);

//GET/API/V1/USERS/profile/
userRoutes.get("/profile", protected,  userProfileCtrl);

//GET/API/V1/USERS/:id
userRoutes.get("/:id", userDetailsCtrl)

//PUT/API/V1/USERS/profile-photo-upload/:id
userRoutes.put("/profile-photo-upload/:id", profileImageCtrl);

//PUT/API/V1/USERS/cover-photo-upload/:id
userRoutes.put("/cover-photo-upload/:id", coverImageCtrl);

//PUT/API/V1/USERS/update-password/:id
userRoutes.put("/update-password/:id", passwordUpdateCtrl);

//GET/API/V1/USERS/logout/:id
userRoutes.get("/logout/:id", logoutCtrl);

module.exports = userRoutes;
