import express from "express";
import { createProduct, updateStock, updateSale, getAllProducts, getProductsByType, getProductsByType2, getProductsByType4, getProductsByType3 } from "../controllers/ProductController.js";

const router = express.Router();

router.post("/create-product", createProduct);
router.get("/",getAllProducts);
router.get("/coffee",getProductsByType);
router.get("/tea",getProductsByType2);
router.get("/chocolate",getProductsByType3);
router.get("/biscuit",getProductsByType4);
router.put("/update-stock", updateStock);
router.put("/update-sale", updateSale);

export default router;