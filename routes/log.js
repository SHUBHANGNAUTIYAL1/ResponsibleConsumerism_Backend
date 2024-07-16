import  express from "express";

import { createLog } from "../controllers/LoggController.js";

const router=express.Router();

router.post("/create",createLog)


export default router