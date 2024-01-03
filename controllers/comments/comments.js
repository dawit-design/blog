const Comment = require("../../models/comment/Comment")
const Post = require("../../models/post/Post")
const User = require("../../models/user/User")

//COMMENTS
const commentsCtrl = async (req, res) => {
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
    res.json(error);
  }
}

// COMMENT DETAILS
const commentDetailsCtrl = async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Comment Details",
    });
  } catch (error) {
    res.json(error);
  }
}

//DELETE COMMENTS
const deleteCommentCtrl = async (req, res) => {
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
    res.json(error);
  }
}

//UPDATE COMMENTS
const updateCommentCtrl = async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Comment Updated",
    });
  } catch (error) {
    res.json(error);
  }
}

module.exports = {commentsCtrl,commentDetailsCtrl, deleteCommentCtrl, updateCommentCtrl}