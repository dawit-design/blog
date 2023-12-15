require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/users/users");
const postRoutes = require("./routes/posts/posts");
const commentRoutes = require("./routes/comments/comments");
const globalErrorHandler = require("./middlewares/globalErrorHandler");

require("./config/dbConnect");

const app = express();

//middlewares
app.use(express.json()) // pass incoming data
//users route
app.use("/api/v1/users", userRoutes);
//posts route
app.use("/api/v1/posts", postRoutes);
//comments route
app.use("/api/v1/comments", commentRoutes);

//error handler middlewares
app.use(globalErrorHandler)
//listening server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is running on ${PORT}`));
