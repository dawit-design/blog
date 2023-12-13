require("dotenv").config();
const express = require("express");

require("./config/dbConnect");

const app = express();

//middlewares
//routes
 //users route
 //POST/API/V1/USERS/REGISTER
 app.post("/api/v1/users/register", async(req, res) => {
    try{
        res.json({
            status: 'successs',
            user: "User Registered"
        })
    }catch(error){
        res.json(error);
    }
 })
 //POST/API/V1/USERS/LOGIN
 app.post("/api/v1/users/login", async(req, res) => {
    try{
        res.json({
            status: 'successs',
            user: "User Logged In"
        })
    }catch(error){
        res.json(error);
    }
 })

 //GET/API/V1/USERS/:id
 app.get("/api/v1/users/:id", async(req, res) => {
    try{
        res.json({
            status: 'successs',
            user: "User Details"
        })
    }catch(error){
        res.jsom(error);
    }
 })
  //GET/API/V1/USERS/profile/:id
  app.get("/api/v1/users/profile/:id", async(req, res) => {
    try{
        res.json({
            status: 'successs',
            user: "User Details"
        })
    }catch(error){
        res.jsom(error);
    }
 })
 //posts route
 //comments route
//error handler middlewares
//listening server

const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is running on ${PORT}`));

//password
