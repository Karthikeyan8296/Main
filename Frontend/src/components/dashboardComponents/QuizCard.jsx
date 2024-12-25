// import React from 'react';

// const QuizCard = () => {
//   return (
//     <div
//       style={{
//         border: '1px solid #ccc',
//         borderRadius: '8px',
//         padding: '10px', // Reduced padding
//         backgroundColor: '#fff',
//         width: '250px', // Set a fixed smaller width
//         margin: '0'
//       }}
//     >
//       <img
//         src="https://via.placeholder.com/250"
//         alt="Quiz"
//         style={{
//           width: '100%',
//           borderRadius: '8px',
//           height: '50%'
//         }}
//       />
//       <h3 style={{ fontSize: '16px', margin: '10px 0' }}>Quiz Title</h3> {/* Reduced font size */}
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur cumque fugit possimus. </p>
//       <button
//       onClick={}
//         style={{
//           padding: '8px 12px', // Reduced padding
//           backgroundColor: '#007bff',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '5px',
//           fontSize: '14px', // Reduced font size
//           marginTop: '10px'
//         }}
//       >
//         Take Quiz
//       </button>
//     </div>
//   );
// };

// export default QuizCard;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const QuizCard = () => {
//   const navigate = useNavigate(); // Hook for navigation

//   const handleTakeQuiz = () => {
//     navigate("/attendQuiz"); // Navigate to /attendQuiz
//   };

//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         borderRadius: "8px",
//         padding: "10px", // Reduced padding
//         backgroundColor: "#fff",
//         width: "250px", // Set a fixed smaller width
//         margin: "0",
//       }}
//     >
//       <img
//         src="https://via.placeholder.com/250"
//         alt="Quiz"
//         style={{
//           width: "100%",
//           borderRadius: "8px",
//           height: "50%",
//         }}
//       />
//       <h3 style={{ fontSize: "16px", margin: "10px 0" }}>Quiz Title</h3>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
//         consequuntur cumque fugit possimus.
//       </p>
//       <button
//         onClick={handleTakeQuiz} // Call handleTakeQuiz on click
//         style={{
//           padding: "8px 12px", // Reduced padding
//           backgroundColor: "#007bff",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           fontSize: "14px", // Reduced font size
//           marginTop: "10px",
//         }}
//       >
//         Take Quiz
//       </button>
//     </div>
//   );
// };

// export default QuizCard;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const QuizCard = () => {
//   const [quiz, setQuiz] = useState(null); // State to store quiz data
//   const navigate = useNavigate(); // Hook for navigation

//   // Fetch the quiz data from the API
//   useEffect(() => {
//     const fetchQuizData = async () => {
//       try {
//         const response = await fetch("http://localhost:5001/api/quizzes/");
//         const data = await response.json();
//         if (data.success && data.quizzes.length > 0) {
//           setQuiz(data.quizzes[0]); // Assuming you want the first quiz
//         }
//       } catch (error) {
//         console.error("Error fetching quiz data:", error);
//       }
//     };

//     fetchQuizData();
//   }, []); // Empty dependency array means it runs once after the component mounts

//   // Handle the button click to navigate to /attendQuiz
//   const handleTakeQuiz = () => {
//     navigate("/attendQuiz");
//   };

//   if (!quiz) {
//     return <div>Loading...</div>; // Show loading message while data is being fetched
//   }

//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         borderRadius: "8px",
//         padding: "15px", // Increased padding to ensure enough space inside the card
//         backgroundColor: "#fff",
//         width: "250px", // Set a fixed smaller width
//         margin: "0",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       {/* Gradient background div */}
//       <div
//         style={{
//           background: "linear-gradient(45deg, #6a11cb, #2575fc)", // Gradient color
//           width: "100%",
//           borderRadius: "8px",
//           height: "150px", // Set fixed height for the gradient background
//           marginBottom: "15px", // Space between the gradient and text
//         }}
//       />
//       <h3
//         style={{
//           fontSize: "16px",
//           margin: "0", // Remove margin to prevent overflow
//           fontWeight: "bold",
//           wordWrap: "break-word", // Ensure long titles break to the next line
//         }}
//       >
//         {quiz.title}
//       </h3>
//       <p
//         style={{
//           fontSize: "14px",
//           marginTop: "10px", // Add margin for spacing between title and description
//           wordWrap: "break-word", // Ensure long descriptions break to the next line
//         }}
//       >
//         {quiz.description}
//       </p>
//       <button
//         onClick={handleTakeQuiz} // Call handleTakeQuiz on click
//         style={{
//           padding: "8px 12px", // Reduced padding
//           backgroundColor: "#007bff",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           fontSize: "14px", // Reduced font size
//           marginTop: "10px", // Add margin for spacing between description and button
//         }}
//       >
//         Take Quiz
//       </button>
//     </div>
//   );
// };

// export default QuizCard;

// orginal code is at top //

import React from "react";
import { useNavigate } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  const navigate = useNavigate(); // Hook for navigation

  // Handle the button click to navigate to /attendQuiz
  const handleTakeQuiz = () => {
    navigate("/attendQuiz", { state: { quizId: quiz._id } }); // Pass quizId to the next page
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 w-72 h-fit flex flex-col space-y-4 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      {/* Gradient Background */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-full h-36 rounded-lg mb-4"></div>

      {/* Quiz Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
        {quiz.title}
      </h3>

      {/* Full Description */}
      <p className="text-gray-700 text-sm h-auto mb-4">{quiz.description}</p>

      {/* Take Quiz Button */}
      <button
        onClick={handleTakeQuiz}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-200"
      >
        Take Quiz
      </button>
    </div>
  );
};

export default QuizCard;
