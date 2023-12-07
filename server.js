const express = require('express');

const app = express();

//middlewares
//routes
//error handler middlewares
//listening server

const PORT= process.env.PORT || 9000
app.listen(PORT, console.log(`Server is running on ${PORT}`));