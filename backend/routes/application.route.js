import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { applyJobs, getApplicants, getAppliedjobs, updateStatus } from "../controllers/application.controller.js";


const router = express.Router();


router.route("/apply/:id").get(authMiddleware,applyJobs);
router.route("/get").get(authMiddleware,getAppliedjobs);
router.route("/:id/applicants").get(authMiddleware,getApplicants);
router.route("/status/:id/update").post(authMiddleware,updateStatus)



export default router;