const express = require("express");
const multer = require("multer");
const {
  registerCtrl,
  loginCtrl,
  userDetailsCtrl,
  userProfileCtrl,
  logoutCtrl,
  passwordUpdateCtrl,
  userUpdateCtrl,
  profileImageCtrl,
  coverImageCtrl,
} = require("../../controllers/users/users");
const protected = require("../../middlewares/protected");
const storage = require("../../config/cloudinary");
const userRoutes = express.Router();

//instance of multer
const upload = multer({ storage });

//POST/API/V1/USERS/REGISTER
userRoutes.post("/register", registerCtrl);

//POST/API/V1/USERS/LOGIN
userRoutes.post("/login", loginCtrl);

//GET/API/V1/USERS/profile/
userRoutes.get("/profile", protected, userProfileCtrl);

//GET/API/V1/USERS/:id
userRoutes.get("/:id", userDetailsCtrl);

//PUT/API/V1/USERS/profile-photo-upload
userRoutes.put(
  "/profile-photo-upload/",
  protected,
  upload.single("profile"),
  profileImageCtrl
);

//PUT/API/V1/USERS/cover-photo-upload/
userRoutes.put(
  "/cover-photo-upload/",
  protected,
  upload.single("profile"),
  coverImageCtrl
);

//PUT/API/V1/USERS/update-password/:id
userRoutes.put("/update-password/:id", passwordUpdateCtrl);

//PUT/API/V1/USERS/update-password/:id
userRoutes.put("/update-user/:id", userUpdateCtrl);

//GET/API/V1/USERS/logout/:id
userRoutes.get("/logout/:id", logoutCtrl);

module.exports = userRoutes;
