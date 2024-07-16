import express from "express";
import { createMessage,  getMessages, getUserMessages } from "../controllers/MssgController.js";

const router = express.Router();

router.post("/create-message", createMessage);
router.get("/:user", getUserMessages);
router.get("/", getMessages);


export default router;
