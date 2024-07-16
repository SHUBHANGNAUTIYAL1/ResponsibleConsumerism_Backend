import mongoose from 'mongoose';

const QuestionnaireSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  responses: {
    type: [mongoose.Schema.Types.Mixed],
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Questionnaire', QuestionnaireSchema);
