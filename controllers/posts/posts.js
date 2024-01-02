const Post = require('../../models/post/Post');
const User = require('../../models/user/User');
//Create POSTS
const createPostCtrl = async (req, res) => {
 const {title, description, category, user} = req.body
  try {
    //Find the user
    const userId = req.Session.userAuth
    const userFound = await User.findyById(userId)
    console.log(userFound);
    //create a post
    const postCreated = await Post.create({
      title,
      description,
      category,
      user: userFound._id,
    })
    //push the post created into the array of user's post
    res.json({
      status: "successs",
      user: "Post Created",
    });
  } catch (error) {
    res.json(error);
  }
};

//Fetch POST LIST
const fetchPostCtrl = async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Post List",
    });
  } catch (error) {
    res.json(error);
  }
};

//POST DETAILS
const postDetailCtrl = async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Post Details",
    });
  } catch (error) {
    res.json(error);
  }
};

//DELETE POST
const postDeleteCtrl = async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Post Deleted",
    });
  } catch (error) {
    res.json(error);
  }
};


//UPDATE POST
const postUpdateCtrl = async (req, res) => {
    try {
      res.json({
        status: "successs",
        user: "Post Updated",
      });
    } catch (error) {
      res.json(error);
    }
  }

  module.exports = {createPostCtrl, fetchPostCtrl, postDetailCtrl, postDeleteCtrl, postUpdateCtrl}