import  express from "express";

import { login1, register1 } from "../controllers/AdminController.js";

const router=express.Router();

router.post("/register",register1)
router.post("/login",login1)



export default router