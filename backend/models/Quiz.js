const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: [
    {
      questionText: { type: String, required: true },
      type: {
        type: String,
        enum: ["multiple-choice", "true-false"],
        required: true,
      },
      options: [{ type: String }],
      correctAnswer: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("Quiz", quizSchema);
