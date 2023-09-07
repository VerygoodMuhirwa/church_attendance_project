
const express = require("express")
const router = express.Router()
const { addAttendance } = require("../Controllers/attendanceControllers")
const {isAuth}= require("../middleware/verifyToken")
router.post("/addAttendance" , isAuth,  addAttendance)
module.exports = router