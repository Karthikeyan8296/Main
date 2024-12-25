import React from "react";
import { SignInButton } from "@clerk/clerk-react";

const landingHero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-center flex flex-col justify-center items-center h-[80vh] px-5">
      <h1 className="text-5xl font-extrabold text-gray-800">
        Welcome to{" "}
        <span className="text-[#df654c] bg-gradient-to-r from-[#df654c] to-orange-500 bg-clip-text text-transparent">
          QuizMaster
        </span>
      </h1>
      <p className="text-xl text-gray-700 mt-5">
        Create, Share, and Test Your Knowledge with Ease!
      </p>
      <p className="text-lg text-gray-600 mt-2 max-w-2xl">
        Turn your knowledge into engaging quizzes. Boost learning and track your
        progress effortlessly!
      </p>
      <div className="mt-8 flex gap-4">
        <SignInButton
          className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-transform transform hover:scale-105"
          mode="redirect"
          forceRedirectUrl="/dashboard"
        >
          Get Started
        </SignInButton>
        <button className="px-6 py-3 text-blue-600 border-2 border-blue-600 rounded-lg shadow-md hover:bg-blue-100 hover:shadow-lg transition-transform transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default landingHero;
