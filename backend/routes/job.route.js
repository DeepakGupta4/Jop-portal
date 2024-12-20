import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";


const router = express.Router();


router.route("/post").post(authMiddleware,postJob);
router.route("/get").get(authMiddleware,getAllJobs);
router.route("/getadminjobs").get(authMiddleware,getAdminJobs);
router.route("/get/:id").get(authMiddleware,getJobById)



export default router;