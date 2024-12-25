const express = require("express");
const router = express.Router();
const {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuizById,
  deleteQuizById,
} = require("../controllers/quizController");

// Routes
router.post("/create", createQuiz);
router.get("/", getAllQuizzes);
router.get("/:id", getQuizById);
router.put("/:id", updateQuizById);
router.delete("/:id", deleteQuizById);

module.exports = router;
