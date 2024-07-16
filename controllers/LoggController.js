// controllers/logs.controller.
import Log from "../models/Logs.js"

// Create a new log entry
export const createLog = async (req, res, next) => {
    try {
        const { message, user } = req.body;

        const newLog = new Log({
            message,
            user // Assuming user is passed as an ObjectId
        });

        const savedLog = await newLog.save();

        return res.status(201).json({ message: 'Log created successfully', log: savedLog });
    } catch (error) {
        next(error);
    }
};
