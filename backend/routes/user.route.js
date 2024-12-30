import express from "express";
import { login, logout, registerUser, updateProfile } from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";


const router = express.Router();


router.route("/register").post(singleUpload,registerUser);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(authMiddleware,updateProfile)



export default router;