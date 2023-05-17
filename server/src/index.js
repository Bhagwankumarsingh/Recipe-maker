import express from "express";
import cors from "cors" 
import mongoose from 'mongoose'

import {userRouter} from "./routes/user.js"
import {recipeRouter} from "./routes/recipes.js"

const app=express()

app.use(express.json());
app.use(cors());

app.use("/auth",userRouter);
app.use("/recipes",recipeRouter);

mongoose.connect(
    "mongodb+srv://BhagwanKrSingh:MB58@recipes.nw7ybuu.mongodb.net/recipes"
);

app.listen(3001,()=>console.log("server started!"));