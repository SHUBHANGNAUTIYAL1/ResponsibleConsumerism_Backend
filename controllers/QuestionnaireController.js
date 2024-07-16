import Questionnaire from '../models/Questionnaire.js';

export const createQuestionnaire = async (req, res, next) => {
  try {
    const { userId, responses } = req.body;
    const newQuestionnaire = new Questionnaire({ user: userId, responses });
    const savedQuestionnaire = await newQuestionnaire.save();
    return res.status(201).json({ message: 'Responses submitted successfully!', questionnaire: savedQuestionnaire });
  } catch (err) {
    next(err);
  }
};
