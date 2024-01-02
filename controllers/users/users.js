const bcrypt = require("bcryptjs");
const User = require("../../models/user/User");
const appErr = require("../../utils/appErr");

//REGISTER
const registerCtrl = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  //check if field is empty
  if (!fullName || !email || !password) {
    return next(appErr("All Fields are Required"));
  }
  try {
    //check if user exist (using email)
    const userFound = await User.findOne({ email });
    //throw error
    if (userFound) {
      return next(appErr("User already Exist"));
      // return res.json({ status: "failed", data: "User already Exist" });
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
const loginCtrl = async (req, res, next) => {
  const { email, password } = req.body;
  //throw this error if nothing is passed in the fileds
  if (!email || !password) {
    return next(appErr("Email and Password fields is required!"));
  }
  try {
    //check if email exists
    const userFound = await User.findOne({ email });
    if (!userFound) {
      //throw error
      return next(appErr("Invalid Credentials"));
    }
    //verify password
    const isPasswordValid = await bcrypt.compare(password, userFound.password);
    if (!isPasswordValid) {
      //throw an error
      return next(appErr("Invalid Credentials"));
    }
    //save the user info
    req.session.userAuth = userFound._id;
    // console.log(req.session);
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
    //get user id from params
    const userId = req.params.id;
    //find the user
    const user = await User.findById(userId);
    res.json({
      status: "successs",
      data: user,
    });
  } catch (error) {
    res.json(error);
  }
};

//USER PROFILE
const userProfileCtrl = async (req, res) => {
  try {
    //get login user
    const userId = req.session.userAuth;
    //find the user
    const user = await User.findById(userId).populate('posts');
    res.json({
      status: "successs",
      data: user,
    });
  } catch (error) {
    res.json(error);
  }
};

//PROFILE IMAGE
const profileImageCtrl = async (req, res, next) => {
  try {
    //finde user tp update
    const userId = await req.session.userAuth;
    const userFound = await User.findById(userId);
    //check if user is found
    if (!userFound) {
      return next(appErr("User not found"));
    }
    //update profile photo
    await User.findByIdAndDelete(
      userId,
      {
        profileImage: req.file.path,
      },
      {
        new: true,
      }
    );
    res.json({
      status: "successs",
      data: "You've Successfully updated your profile photo",
    });
  } catch (error) {
    next(appErr(error.message));
  }
};

//COVER IMAGE
const coverImageCtrl = async (req, res) => {
  try {
    //finde user tp update
    const userId = await req.session.userAuth;
    const userFound = await User.findById(userId);
    //check if user is found
    if (!userFound) {
      return next(appErr("User not found"));
    }
    //update profile photo
    await User.findByIdAndDelete(
      userId,
      {
        coverImage: req.file.path,
      },
      {
        new: true,
      }
    );
    res.json({
      status: "successs",
      data: "You've Successfully updated your cover photo",
    });
  } catch (error) {
    next(appErr(error.message));
  }
};

//PASSWORD UPDATE
const passwordUpdateCtrl = async (req, res, next) => {
  const { password } = req.body;
  try {
    //check if user is updating the password
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const passwordHashed = await bcrypt.hash(password, salt);
      //update user
      await User.findByIdAndUpdate(
        req.params.id,
        {
          password: passwordHashed,
        },
        {
          new: true,
        }
      );
      res.json({
        status: "successs",
        data: "Password has been changed succesfully",
      });
    }
  } catch (error) {
    return next(appErr("Please provide password field"));
  }
};

//USER UPDATE
const userUpdateCtrl = async (req, res, next) => {
  const { fullName, email } = req.body;
  try {
    //check if email is taken
    if (email) {
      const emailTaken = await User.findOne({ email });
      if (emailTaken) {
        return next(appErr("Email is taken", 400));
      }
    }
    //update the user
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        fullName,
        email,
      },
      {
        new: true,
      }
    );
    res.json({
      status: "successs",
      data: user,
    });
    console.log(user);
  } catch (error) {
    res.json(next(appErr(error.message)));
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
  userUpdateCtrl,
  loginCtrl,
  userDetailsCtrl,
  profileImageCtrl,
  coverImageCtrl,
};
