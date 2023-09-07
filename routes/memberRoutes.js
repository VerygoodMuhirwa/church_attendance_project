const express = require("express");
const router = express.Router();
const { addMembers, getMembers, deleteMember, updateMember } = require("../Controllers/memberControllers")
const { isAuth } = require("../middleware/verifyToken");

router.post("/addMember",isAuth, addMembers);
router.get("/getMembers",isAuth, getMembers)
router.delete("/deleteMember/:id", isAuth, deleteMember)
router.put("/updateMember/:id" , isAuth, updateMember)
module.exports = router;
