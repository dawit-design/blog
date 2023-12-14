const bcrypt = require("bcryptjs");
const User = require("../../models/user/user");

//REGISTER
const registerCtrl = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    //check if user exist (using email)
    const userFound = await User.findOne({ email });
    //throw error
    if (userFound) {
      return res.json({ status: "failed", data: "User already Exist" });
    }
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    //Register User
    const user = await User.create({
      fullName,
      email,
      password: passwordHash,
    });
    res.json({
      status: "successs",
      data: user,
    });
  } catch (error) {
    res.json(error);
  }
};

//LOGIN
const loginCtrl = async (req, res) => {
  const { email, password } = req.body;
  try {
    //check if email exists
    const userFound = await User.findOne({ email });
    if (!userFound) {
      //throw error
      if (userFound) {
        return res.json({ status: "failed", data: "Invalid Credentials" });
      }
    }
    //verify password
    const isPasswordValid = await bcrypt.compare(password, userFound.password)
    if(!isPasswordValid){
      if (userFound) {
        return res.json({ status: "failed", data: "Invalid Credentials" });
      }
    }
    res.json({
      status: "successs",
      data: userFound,
    });
  } catch (error) {
    res.json(error);
  }
};

//USER DETAILS
const userDetailsCtrl = async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Details",
    });
  } catch (error) {
    res.json(error);
  }
};

//USER DETAILS
const userProfileCtrl = async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Profile",
    });
  } catch (error) {
    res.json(error);
  }
};

//PROFILE IMAGE
const profileImageCtrl = async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Profile Image Upload",
    });
  } catch (error) {
    res.json(error);
  }
};

//COVER IMAGE
const coverImageCtrl = async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Cover Image Upload",
    });
  } catch (error) {
    res.json(error);
  }
};

//PASSWORD UPDATE
const passwordUpdateCtrl = async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Password Update",
    });
  } catch (error) {
    res.json(error);
  }
};

//LOGOUT
const logoutCtrl = async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Logout",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  registerCtrl,
  logoutCtrl,
  userProfileCtrl,
  passwordUpdateCtrl,
  loginCtrl,
  userDetailsCtrl,
  profileImageCtrl,
  coverImageCtrl,
};
