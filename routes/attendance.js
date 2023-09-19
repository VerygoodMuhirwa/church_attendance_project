
const express = require("express")
const router = express.Router()
const { addAttendance, deleteAttendance } = require("../Controllers/attendanceControllers")
const {isAuth}= require("../middleware/verifyToken")
router.post("/addAttendance", isAuth, addAttendance)
router.delete("/deleteAttendance/:id" , isAuth, deleteAttendance)
module.exports = router