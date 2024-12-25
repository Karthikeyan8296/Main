import React from "react";
import HeroSection from "../components/landingComponents/landingHero";
import Navbar from "../components/LandingComponents/navbar";
import Footer from "../components/LandingComponents/footer";
import dash_img from "../assets/sample_dash.jpg";
import { SignInButton } from "@clerk/clerk-react";

function LandingPage() {
  return (
    <>
      <div
        className="Background"
        style={{
          backgroundColor: "white",
          height: "100vh", // Full viewport height
          width: "100vw", // Full viewport width
          margin: 0, // Removes default margin
        }}
      >
        <Navbar /> {/* Use Navbar component */}
        <HeroSection />
        <div className="text-center my-10 flex flex-col items-center gap-5">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-800 max-w-2xl">
            Join us to{" "}
            <span className="text-blue-800">attend, create, edit quizzes</span>,{" "}
            and sharpen your skills with{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-500 text-transparent bg-clip-text">
              Quiz Master
            </span>{" "}
            – your ultimate learning companion!
          </h1>

          {/* Image */}
          <img
            src={dash_img}
            alt="Dashboard Design"
            className="w-4/5 max-w-4xl rounded-lg shadow-lg transition-transform hover:scale-105"
          />
        </div>
        <Footer></Footer>
      </div>
      {/* <div className="p-4">
        <h1 className="text-center text-2xl">Welcome to Quiz Maker</h1>
        <SignInButton mode="redirect" forceRedirectUrl="/dashboard" />
      </div> */}
    </>
  );
}

export default LandingPage;
