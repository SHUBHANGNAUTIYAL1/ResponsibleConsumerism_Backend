import express from "express";

import { createOrder, deleteOrder, getOrdersByUser } from "../controllers/OrderController.js";

const router = express.Router();

router.post("/create-order", createOrder);
router.get('/user/:userId', getOrdersByUser);
router.delete('/:id', deleteOrder);


export default router;