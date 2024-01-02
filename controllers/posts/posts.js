const Post = require('../../models/post/Post');
const User = require('../../models/user/User');
const appErr = require("../../utils/appErr")
//Create POSTS
const createPostCtrl = async (req, res, next) => {
 const {title, description, category, user} = req.body
  try {
    if(!title || !description || !category || !req.file){
      return next(appErr("All Fields Are Required!"))
    }
    //Find the user
    const userId = req.session.userAuth
    const userFound = await User.findById(userId)
    //create a post
    const postCreated = await Post.create({
      title,
      description,
      category,
      user: userFound._id,
      image: req.file.path,
    })
    //push the post created into the array of user's post
    userFound.posts.push(postCreated._id)
    //re save
    await userFound.save()
    res.json({
      status: "success",
      data: postCreated,
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
const postDetailCtrl = async (req, res, next) => {
  try {
    //get the id from params
    const id = req.params.id;
    //find the post
    const post = await Post.findById(id)
    res.json({
      status: "successs",
      data: post,
    });
  } catch (error) {
    next(appErr(error.message));
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