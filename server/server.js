const dotenv = require("dotenv");
const app = require("./index");
const mongoose  = require("mongoose");
const path = require('path');
const express = require("express");

dotenv.config({path: "./config.env"});

//console.log(process.env);

mongoose.connect(process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD), {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("database connection success");
}).catch((err)=>{
    console.log("Databse connection failed", err);
})


const port = process.env.PORT || 3000;

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.listen(port, ()=>{
    console.log("Server is listening at port: ", port);
})

