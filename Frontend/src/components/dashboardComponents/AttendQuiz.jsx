// import React, { useState } from 'react';

// const AttendQuiz = () => {
//   // Example questions
//   const questions = [
//     {
//       id: 1,
//       question: 'What is the capital of France?',
//       options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
//       correctAnswer: 'Paris',
//     },
//     {
//       id: 2,
//       question: 'Which planet is known as the Red Planet?',
//       options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
//       correctAnswer: 'Mars',
//     },
//     {
//       id: 3,
//       question: 'What is the largest ocean on Earth?',
//       options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
//       correctAnswer: 'Pacific Ocean',
//     },
//   ];

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [score, setScore] = useState(0);

//   const currentQuestion = questions[currentQuestionIndex];

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//   };

//   const handleNext = () => {
//     if (selectedOption === currentQuestion.correctAnswer) {
//       setScore((prevScore) => prevScore + 1);
//     }
//     setSelectedOption(''); // Reset selected option

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     } else {
//       alert(`Quiz completed! Your score is ${score + 1}/${questions.length}`);
//     }
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//       <h1 style={{ color: '#333', marginBottom: '20px' }}>Attend Quiz</h1>
//       <p style={{ color: '#555', marginBottom: '30px' }}>
//         Question {currentQuestionIndex + 1} of {questions.length}
//       </p>

//       <div style={{ marginBottom: '20px' }}>
//         <h3 style={{ color: '#007bff', marginBottom: '10px' }}>{currentQuestion.question}</h3>
//         <div>
//           {currentQuestion.options.map((option, index) => (
//             <label key={index} style={{ display: 'block', marginBottom: '15px' }}>
//               <input
//                 type="radio"
//                 name="answer"
//                 value={option}
//                 checked={selectedOption === option}
//                 onChange={() => handleOptionChange(option)}
//                 style={{ marginRight: '10px' }}
//               />
//               <span style={{ color: '#333' }}>{option}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={handleNext}
//         style={{
//           padding: '10px 20px',
//           backgroundColor: '#007bff',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           fontSize: '16px',
//           fontWeight: 'bold',
//         }}
//         disabled={!selectedOption} // Disable button if no option is selected
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default AttendQuiz;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Confetti from "react-confetti";
// import { useWindowSize } from "react-use";

// const AttendQuiz = () => {
//   const [quiz, setQuiz] = useState(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [score, setScore] = useState(0);
//   const [isQuizCompleted, setIsQuizCompleted] = useState(false);

//   // For the confetti
//   const { width, height } = useWindowSize();

//   useEffect(() => {
//     const fetchQuiz = async () => {
//       try {
//         const response = await axios.get("http://localhost:5001/api/quizzes/");
//         if (response.data.success) {
//           setQuiz(response.data.quizzes[0]);
//         }
//       } catch (error) {
//         console.error("Error fetching quiz data:", error);
//       }
//     };

//     fetchQuiz();
//   }, []);

//   if (!quiz) {
//     return <p className="text-center text-lg font-medium">Loading quiz...</p>;
//   }

//   const currentQuestion = quiz.questions[currentQuestionIndex];

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//   };

//   const handleNext = () => {
//     if (selectedOption === currentQuestion.correctAnswer) {
//       setScore((prevScore) => prevScore + 1);
//     }
//     setSelectedOption("");

//     if (currentQuestionIndex < quiz.questions.length - 1) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     } else {
//       setIsQuizCompleted(true);
//     }
//   };

//   const getEmoji = (score, total) => {
//     const percentage = (score / total) * 100;
//     if (percentage === 100) return "🎉🥳";
//     if (percentage >= 75) return "😊👍";
//     if (percentage >= 50) return "😌👌";
//     return "😢👎";
//   };

//   if (isQuizCompleted) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//         {/* Confetti Effect */}
//         <Confetti width={width} height={height} />

//         <h1 className="text-3xl font-bold mb-4 text-gray-800">
//           Quiz Completed!
//         </h1>
//         <h2 className="text-xl font-medium mb-2">
//           Your Score: {score}/{quiz.questions.length}{" "}
//           {getEmoji(score, quiz.questions.length)}
//         </h2>
//         <p className="text-gray-600 mb-6">Thank you for taking the quiz!</p>
//         <button
//           onClick={() => {
//             setIsQuizCompleted(false);
//             setScore(0);
//             setCurrentQuestionIndex(0);
//           }}
//           className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600"
//         >
//           Restart Quiz
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center items-center h-dvh flex-col max-w-3xl mx-auto p-6">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">{quiz.title}</h1>
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <p className="text-sm text-gray-500 mb-4">
//           Question {currentQuestionIndex + 1} of {quiz.questions.length}
//         </p>
//         <h3 className="text-lg font-medium text-gray-800 mb-4">
//           {currentQuestion.questionText}
//         </h3>
//         <div className="space-y-4">
//           {currentQuestion.options.map((option, index) => (
//             <label
//               key={index}
//               className={`block border rounded-lg px-4 py-2 cursor-pointer ${
//                 selectedOption === option
//                   ? option === currentQuestion.correctAnswer
//                     ? "border-green-500 bg-green-50"
//                     : "border-red-500 bg-red-50"
//                   : "border-gray-300 hover:bg-gray-100"
//               }`}
//             >
//               <input
//                 type="radio"
//                 name="answer"
//                 value={option}
//                 checked={selectedOption === option}
//                 onChange={() => handleOptionChange(option)}
//                 className="hidden"
//               />
//               {option}
//             </label>
//           ))}
//         </div>
//         <div className="flex justify-between items-center mt-6">
//           <button
//             onClick={() => {
//               setIsQuizCompleted(false);
//               setScore(0);
//               setCurrentQuestionIndex(0);
//             }}
//             className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
//           >
//             Back
//           </button>
//           <button
//             onClick={handleNext}
//             disabled={!selectedOption}
//             className={`px-4 py-2 rounded-lg shadow ${
//               selectedOption
//                 ? "bg-blue-500 text-white hover:bg-blue-600"
//                 : "bg-gray-300 text-gray-600 cursor-not-allowed"
//             }`}
//           >
//             {currentQuestionIndex === quiz.questions.length - 1
//               ? "Finish"
//               : "Next"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendQuiz;

//orginal code is at top//

import React, { useState, useEffect } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AttendQuiz = () => {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const navigate = useNavigate();

  const handleback = () => {
    navigate("/dashboard");
  };

  // For confetti
  const { width, height } = useWindowSize();

  const { state } = useLocation(); // Access quizId from location state
  const { quizId } = state || {}; // Extract quizId from state

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/quizzes/${quizId}`
        );
        if (response.data.success) {
          setQuiz(response.data.quiz);
        }
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    if (quizId) {
      fetchQuiz();
    }
  }, [quizId]);

  if (!quiz) {
    return <p className="text-center text-lg font-medium">Loading quiz...</p>;
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedOption("");

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const getEmoji = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "🎉🥳";
    if (percentage >= 75) return "😊👍";
    if (percentage >= 50) return "😌👌";
    return "😢👎";
  };

  if (isQuizCompleted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <Confetti width={width} height={height} />
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Quiz Completed!
        </h1>
        <h2 className="text-xl font-medium mb-2">
          Your Score: {score}/{quiz.questions.length}{" "}
          {getEmoji(score, quiz.questions.length)}
        </h2>
        <p className="text-gray-600 mb-6">Thank you for taking the quiz!</p>
        <button
          onClick={handleback}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-dvh flex-col max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">{quiz.title}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-sm text-gray-500 mb-4">
          Question {currentQuestionIndex + 1} of {quiz.questions.length}
        </p>
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          {currentQuestion.questionText}
        </h3>
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <label
              key={index}
              className={`block border rounded-lg px-4 py-2 cursor-pointer ${
                selectedOption === option
                  ? option === currentQuestion.correctAnswer
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className="hidden"
              />
              {option}
            </label>
          ))}
        </div>
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendQuiz;
