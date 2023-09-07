const express = require("express")
const router = express.Router()
const { getReport, getPreviousReports, getSingleReport, getAbarwayi } = require("../Controllers/reportControllers")
const { isAuth } = require("../middleware/verifyToken");

router.get("/getReport",isAuth, getReport)
router.get("/getPreviousReports", isAuth, getPreviousReports)
router.get("/getSingleReport/:id", isAuth, getSingleReport)
router.get("/getAbarwayi" , isAuth, getAbarwayi )
module.exports= router