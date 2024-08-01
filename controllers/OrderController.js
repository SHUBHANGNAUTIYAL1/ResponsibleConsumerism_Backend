import Order from "../models/Order.js";

// Create a new order
export const createOrder = async (req, res, next) => {
    try {
        const { name, image, desc, price,score, quantity, user, rating, label1, label2 } = req.body;

        const newOrder = new Order({
            name,
            image,
            desc,
            price,
            quantity,
            user,
            rating,
            label1,
            label2,
            score,
        });

        const savedOrder = await newOrder.save();

        return res.status(200).json({ message: "Order created successfully", order: savedOrder });
    } catch (err) {
        next(err);
    }
};


// Fetch all orders by userId
export const getOrdersByUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        console.log(userId);

        const orders = await Order.find({ user: userId });
        console.log(orders);

        if (!orders || orders.length === 0) {
            return res.status(404).json({ message: "No orders found for this user" });
        }

        return res.status(200).json({message: "Orders retrieved successfully", orders });
    } catch (err) {
        next(err);
    }
};



// Delete an order by id
export const deleteOrder = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deletedOrder = await Order.findByIdAndDelete(id);

        if (!deletedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        return res.status(200).json({ message: "Order deleted successfully" });
    } catch (err) {
        next(err);
    }
};
