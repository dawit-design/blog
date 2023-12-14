//REGISTER
const registerCtrl = async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Registered",
    });
  } catch (error) {
    res.json(error);
  }
};
//LOGIN
const loginCtrl = async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Logged In",
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
