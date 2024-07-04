const express=require("express");
const router=express.Router();
const authController=require("../Controllers/authController")

router.post("/signup",authController.signup_post);
router.post("/login",authController.login_post)

module.exports=router;