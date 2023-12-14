//POSTS

const postCtrl = async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Post Created",
    });
  } catch (error) {
    res.json(error);
  }
};

//POST LIST
const postListCtrl = async (req, res) => {
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

  module.exports = {postCtrl, postListCtrl, postDetailCtrl, postDeleteCtrl, postUpdateCtrl}