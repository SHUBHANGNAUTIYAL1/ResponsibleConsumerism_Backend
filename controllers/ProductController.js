import Product from "../models/Products.js";

// Create a new product
export const createProduct = async (req, res, next) => {
    try {
        const { name, image, desc, price, stock, producttype, sale,rating, user ,label1 , label2} = req.body;

        const newProduct = new Product({
            name,
            image,
            desc,
            price,
            stock,
            rating,
            producttype,
            sale,
            user,
            label1,
            label2,
        });

        const savedProduct = await newProduct.save();

        return res.status(200).json({ message: "Product created successfully", product: savedProduct });
    } catch (err) {
        next(err);
    }
};

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        return res.status(200).json({ message: "Products retrieved successfully", products });
    } catch (err) {
        next(err);
    }
};
export const getProductsByType = async (req, res, next) => {
    

    try {
        const products = await Product.find({ producttype: 'coffee' });
        if (products.length === 0) {
            return res.status(404).json({ message: "No products found for this type" });
        }
        return res.status(200).json({ message: "Products retrieved successfully", products });
    } catch (err) {
        next(err);
    }
};
export const getProductsByType2 = async (req, res, next) => {
    

    try {
        const products = await Product.find({ producttype: 'tea' });
        if (products.length === 0) {
            return res.status(404).json({ message: "No products found for this type" });
        }
        return res.status(200).json({ message: "Products retrieved successfully", products });
    } catch (err) {
        next(err);
    }
};
export const getProductsByType3= async (req, res, next) => {
    

    try {
        const products = await Product.find({ producttype: 'chocolate' });
        if (products.length === 0) {
            return res.status(404).json({ message: "No products found for this type" });
        }
        return res.status(200).json({ message: "Products retrieved successfully", products });
    } catch (err) {
        next(err);
    }
};
export const getProductsByType4= async (req, res, next) => {
    

    try {
        const products = await Product.find({ producttype: 'biscuits' });
        if (products.length === 0) {
            return res.status(404).json({ message: "No products found for this type" });
        }
        return res.status(200).json({ message: "Products retrieved successfully", products });
    } catch (err) {
        next(err);
    }
};

// Update stock value
export const updateStock = async (req, res, next) => {
    try {
        const { productId, stock } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { stock },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({ message: "Stock updated successfully", product: updatedProduct });
    } catch (err) {
        next(err);
    }
};

// Update sale value
export const updateSale = async (req, res, next) => {
    try {
        const { productId, sale } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { sale },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({ message: "Sale updated successfully", product: updatedProduct });
    } catch (err) {
        next(err);
    }
};
