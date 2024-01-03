const Comment = require("../../models/comment/Comment")
const Post = require("../../models/post/Post")
const User = require("../../models/user/User")
const appErr = require("../../utils/appErr")

//COMMENTS
const commentsCtrl = async (req, res, next) => {
  const { message} = req.body
  try {
    //find the post
    const post = await Post.findById(req.params.id)
    //create the comment
    const comment = await Comment.create({
      user: req.session.userAuth,
      message,
    })
    //push the comment to the post
    post.comments.push(comment._id)
    //find the user
    const user = await User.findById(req.session.userAuth)
    //push the comment onto the user
    user.comments.push(comment._id)
    //disable validation
    //save
    await post.save({validateBeforeSave: false})
    await user.save({validateBeforeSave: false})
    res.json({
      status: "successs",
      data: comment,
    });
  } catch (error) {
    next(appErr(error));
  }
}

// COMMENT DETAILS
const commentDetailsCtrl = async (req, res, next) => {
  try {
    res.json({
      status: "successs",
      user: "Comment Details",
    });
  } catch (error) {
    next(appErr(error));
  }
}

//DELETE COMMENTS
const deleteCommentCtrl = async (req, res, next) => {
  try {//find a comment
    const comment = await Comment.findById(req.params.id);
    //check if the comment belongs to the user
    if (comment.user.toString() !== req.session.userAuth.toString()) {
      return next(
        appErr("You can't delete a comment that doesn't belong to you!", 403)
      );
    }
    //delete post
    await Comment.findByIdAndDelete(req.params.id);
    res.json({
      status: "successs",
      data: "Comment Has been Deleted",
    });
  } catch (error) {
    next(appErr(error));
  }
}

//UPDATE COMMENTS
const updateCommentCtrl = async (req, res, next) => {
  try {
    //find a comment
    const comment = await Comment.findById(req.params.id);
    if(!comment){
      return next(appErr('Comment not found'))
    } 
    //check if the comment belongs to the user
    if (comment.user.toString() !== req.session.userAuth.toString()) {
      return next(
        appErr("You can't update a comment that doesn't belong to you!", 403)
      );
    }
    //update the comment
    const commentUpdated = await Post.findByIdAndUpdate(
      req.params.id,
      {
        message: req.body.message,
      },
      { new: true }
    );
    res.json({
      status: "successs",
      data: commentUpdated,
    });
  } catch (error) {
    next(appErr(error));
  }
}

module.exports = {commentsCtrl,commentDetailsCtrl, deleteCommentCtrl, updateCommentCtrl}