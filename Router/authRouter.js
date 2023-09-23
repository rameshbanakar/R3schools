const express=require("express")
const router=express.Router()
const { signinUser, loginUser } = require("../Controller/authController");
router.route("/signin").post(signinUser);
router.route("/login").post(loginUser);
module.exports = router;