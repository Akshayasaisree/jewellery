import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const express = require("express")
const mongoose = require( 'mongoose')
const cors = require("cors")
const app = express()
app. use (express.json())
app.use (cors())
mongoose.connect(process.env.MONGO_URI)

app.listen(3001,()=>{
    console.log("server is running")
})