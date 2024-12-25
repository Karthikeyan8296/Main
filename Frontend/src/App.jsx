import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RedirectToSignIn, useClerk } from "@clerk/clerk-react";
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./Pages/Dashboard";
import AttendQuiz from "./components/dashboardComponents/AttendQuiz";
import CreateQuiz from "./components/dashboardComponents/CreateQuiz";
import YourQuiz from "./components/dashboardComponents/YourQuiz";
import Profile from "./components/dashboardComponents/profile";
import EditQuiz from "./components/dashboardComponents/EditQuiz";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for Landing started page */}
        <Route path="/" element={<LandingPage />} />
        {/* error handling page */}
        <Route path="*" element={<NotFound />} />
        {/* Route for authenticated users */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/attendQuiz" element={<AttendQuiz />} />
        <Route path="/CreateQuiz" element={<CreateQuiz />} />
        <Route path="/yourQuiz" element={<YourQuiz />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editQuiz/:id" element={<EditQuiz />} />
      </Routes>
    </Router>
  );
};

// ProtectedRoute component to check if the user is signed in
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useClerk();

  if (isAuthenticated) {
    return <RedirectToSignIn />;
  }

  return children;
};

export default App;
