const Quiz = require("../models/Quiz");

// Create a new quiz
exports.createQuiz = (req, res) => {
  const { title, description, questions } = req.body;

  const newQuiz = new Quiz({ title, description, questions });

  newQuiz
    .save()
    .then((quiz) => res.status(201).json({ success: true, quiz }))
    .catch((err) => res.status(500).json({ success: false, error: err.message }));
};

// Get all quizzes
exports.getAllQuizzes = (req, res) => {
  Quiz.find()
    .then((quizzes) => res.status(200).json({ success: true, quizzes }))
    .catch((err) => res.status(500).json({ success: false, error: err.message }));
};

// Get a single quiz by ID
exports.getQuizById = (req, res) => {
  const { id } = req.params;

  Quiz.findById(id)
    .then((quiz) => {
      if (!quiz) return res.status(404).json({ success: false, message: "Quiz not found" });
      res.status(200).json({ success: true, quiz });
    })
    .catch((err) => res.status(500).json({ success: false, error: err.message }));
};

// Update a quiz by ID
exports.updateQuizById = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  Quiz.findByIdAndUpdate(id, updatedData, { new: true })
    .then((quiz) => {
      if (!quiz) return res.status(404).json({ success: false, message: "Quiz not found" });
      res.status(200).json({ success: true, quiz });
    })
    .catch((err) => res.status(500).json({ success: false, error: err.message }));
};

// Delete a quiz by ID
exports.deleteQuizById = (req, res) => {
  const { id } = req.params;

  Quiz.findByIdAndDelete(id)
    .then((quiz) => {
      if (!quiz) return res.status(404).json({ success: false, message: "Quiz not found" });
      res.status(200).json({ success: true, message: "Quiz deleted successfully" });
    })
    .catch((err) => res.status(500).json({ success: false, error: err.message }));
};
