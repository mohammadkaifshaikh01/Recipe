import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./src/models/user.model.js";
// import recipie from "./src/models/recipe.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import cors from "cors"
const app = express();
app.use(express.json())

app.use(cors())
dotenv.config()


const PORT = process.env.PORT || 5000;



// creating server 
app.listen(PORT , () =>{
  console.log(`Server is running on port ${PORT}`);
  ConnectDB()
})



// Connet To Data Base
const ConnectDB = async() =>{
  try {
     const connectionEstablished = await mongoose.connect(process.env.MONGO_URI);
     console.log("MongoDB Connected");

  } catch (error) {
     console.log("Failed To Connect MongoDB" ,error);
  }
}

app.get("/api/recipes", async (req, res) => {
  try {
    const response = await fetch("https://dummyjson.com/recipes?limit=50");
    const data = await response.json()
    console.log(data)
    res.status(200).send({
      message: "Recipes fetched successfully",
      data: data.recipes
    })
  } catch (error) {
    console.error("Error fetching recipes:", error.message);
    res.send(500).json({ message: "Failed to fetch recipes" });
  }
});




// Register User 

app.post ("/register" , async(req,res)=>{
  const {username , email , password} = req.body;
  let user = await User.findOne({email})
  if (user)
     return res.status(400).send({
        message : "User Already Exist , Please Login" ,

});
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword)

  user = await User.create({
     username ,
     email ,
     password : hashedPassword
  });

  res.status(200).send({
     message : "User Registered",
     user,
  });
  
})


app.post("/login" , async(req,res)=>{
  const {email , password} = req.body;
  const user = await User.findOne({email});
  if(!user)
     return res.status(400).json({
  message : "User Not Found"
     })
     const isMatch = await bcrypt.compare(password , user.password);
     if(!isMatch)
        return res.status(400).json({
     message :  "Invalid Credentials"
        })
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY , {expiresIn : "1h"});
        res.status(200).json({
           message : "User Login Successfull",
           token
        })
})

