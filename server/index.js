const express = require("express");
const app = express();
const userRouter = require("./Routes/userRouter/userRouter");
const vehicleRouter = require("./Routes/vehicleRouter/vehicle.Router");
const otpRouter = require("./Routes/OTP_Router/otp_router")
const cors = require("cors");
const raj_stolen_model = require("./Models/Raj.stolen.model");
const path = require('path');

app.use(express.json());
//app.use(cors());

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));


app.use("/api/v1/user", userRouter);
app.use("/api/v1/vehicle", vehicleRouter);
app.use("/api/v1/otp", otpRouter);


app.use((err, req, res, next)=>{
    // console.log("Error caught from Default Error hadler middleware.");
    // console.log(err);
    res.json({
        status : "fail",
        err
    })
})

app.use("/*", (req, res)=>{
    res.sendFile(path.join(buildPath, 'index.html'));
})

module.exports = app;