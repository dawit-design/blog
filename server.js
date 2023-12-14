require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/users/users");
const postRoutes = require("./routes/posts/posts");
const commentRoutes = require("./routes/comments/comments");

require("./config/dbConnect");

const app = express();

//middlewares
app.use('/api/something', (req, res) => {
    res.send("I will call always")
})
//routes
//users route
//POST/API/V1/USERS/REGISTER
app.post("/api/v1/users/register", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Registered",
    });
  } catch (error) {
    res.json(error);
  }
});
//POST/API/V1/USERS/LOGIN
app.post("/api/v1/users/login", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Logged In",
    });
  } catch (error) {
    res.json(error);
  }
});

//GET/API/V1/USERS/:id
app.get("/api/v1/users/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Details",
    });
  } catch (error) {
    res.json(error);
  }
});
//GET/API/V1/USERS/profile/:id
app.get("/api/v1/users/profile/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Details",
    });
  } catch (error) {
    res.json(error);
  }
});

//PUT/API/V1/USERS/profile-photo-upload/:id
app.put("/api/v1/users/profile-photo-upload/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Profile Image Upload",
    });
  } catch (error) {
    res.json(error);
  }
});

//PUT/API/V1/USERS/cover-photo-upload/:id
app.put("/api/v1/users/cover-photo-upload/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Cover Image Upload",
    });
  } catch (error) {
    res.json(error);
  }
});

//PUT/API/V1/USERS/update-password/:id
app.put("/api/v1/users/update-password/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Password Update",
    });
  } catch (error) {
    res.json(error);
  }
});

//GET/API/V1/USERS/logout/:id
app.get("/api/v1/users/logout/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Logout",
    });
  } catch (error) {
    res.json(error);
  }
});
//posts route
//POST/API/V1/posts
app.post("/api/v1/posts", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Post Created",
    });
  } catch (error) {
    res.json(error);
  }
});

//GET/API/V1/posts/
app.get("/api/v1/posts", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Post List",
    });
  } catch (error) {
    res.json(error);
  }
});

//GET/API/V1/posts/:id
app.get("/api/v1/posts/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Post Details",
    });
  } catch (error) {
    res.json(error);
  }
});

//DELETE/API/V1/posts/:id
app.delete("/api/v1/posts/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Post Deleted",
    });
  } catch (error) {
    res.json(error);
  }
});

//UPDATE/API/V1/posts/:id
app.put("/api/v1/posts/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Post Updated",
    });
  } catch (error) {
    res.json(error);
  }
});
//comments route

//POST/API/V1/comments
app.post("/api/v1/comments", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Comment Created",
    });
  } catch (error) {
    res.json(error);
  }
});

//GET/API/V1/comments/:id
app.get("/api/v1/comments/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Comment Details",
    });
  } catch (error) {
    res.json(error);
  }
});

//DELETE/API/V1/comments/:id
app.delete("/api/v1/comments/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Comment Deleted",
    });
  } catch (error) {
    res.json(error);
  }
});

//UPDATE/API/V1/comments/:id
app.put("/api/v1/comments/:id", async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "Comment Updated",
    });
  } catch (error) {
    res.json(error);
  }
});
//error handler middlewares
//listening server

const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is running on ${PORT}`));

//password
