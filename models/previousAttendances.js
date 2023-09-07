const mongoose = require("mongoose")

const Schema = mongoose.Schema

const previousAttendanceSchema = new Schema({
    previousAttendances:[]
}, { timestamps: true })

const previousAttendanceModel = mongoose.model("previousAttendanceModel" , previousAttendanceSchema)
module.exports= previousAttendanceModel