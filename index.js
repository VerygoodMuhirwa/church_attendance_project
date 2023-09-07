const express = require("express")
const app = express()
const cors = require("cors")
const mongoose= require("mongoose")
require("dotenv").config()
app.use(cors())
app.use(express.json())
mongoose.connect(process.env.mongodbUrl)
    .then(() => {
        console.log("Connected to db successfully");
    }).catch(err => {
        console.log(err);
    });
const adminControllers = require("./routes/adminRoutes")
const attendanceControllers = require("./routes/attendance")
const memberControllers = require("./routes/memberRoutes")
const reportControllers = require("./routes/reportControllers")
app.use("/api/v1/admin", adminControllers)
app.use("/api/v1/attendance", attendanceControllers);
app.use("/api/v1/members", memberControllers);
app.use("/api/v1/reports", reportControllers )
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log("The server running on port ",port )
})

