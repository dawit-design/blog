//COMMENTS

const commentsCtrl = async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Comment Created",
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
  try {
    res.json({
      status: "successs",
      user: "Comment Deleted",
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