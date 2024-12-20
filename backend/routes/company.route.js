import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";


const router = express.Router();


router.route("/register").post(authMiddleware,registerCompany);
router.route("/get").get(authMiddleware,getCompany);
router.route("/get/:id").get(authMiddleware,getCompanyById);
router.route("/update/:id").put(authMiddleware,updateCompany)



export default router;