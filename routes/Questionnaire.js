import express from "express";
import { createQuestionnaire } from "../controllers/QuestionnaireController.js";

const router = express.Router();

router.post("/create", createQuestionnaire);
export default router;