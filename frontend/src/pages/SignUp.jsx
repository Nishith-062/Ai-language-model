import React from "react";
import { PiStarFourBold } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-evenly bg-base-200">
      {/* Left Content */}
      <div className="flex flex-col max-w-xl space-y-6">
        <h1 className="text-5xl font-bold text-primary">Join Us Today!</h1>
        <p className="text-lg text-base-content/80">
          Create your account and start your language learning journey.
        </p>

        <p className="text-xl font-semibold mt-6">Experience interactive AI learning</p>
        <p className="text-base-content/70">
          Get personalized lessons, real-time conversation practice, and smart
          feedback that helps you improve faster.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="card border border-base-300 shadow-md hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <PiStarFourBold className="text-4xl text-primary mb-2" />
              <h2 className="card-title">Smart Lessons</h2>
              <p className="text-sm text-base-content/70">
                AI-tailored learning modules
              </p>
            </div>
          </div>

          <div className="card border border-base-300 shadow-md hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <IoPersonOutline className="text-4xl text-secondary mb-2" />
              <h2 className="card-title">Custom Profiles</h2>
              <p className="text-sm text-base-content/70">
                Learn at your own pace
              </p>
            </div>
          </div>

          <div className="card border border-base-300 shadow-md hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <CiTrophy className="text-4xl text-accent mb-2" />
              <h2 className="card-title">Gamified Goals</h2>
              <p className="text-sm text-base-content/70">
                Earn rewards while learning
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Signup Form */}
      <div className="card w-96 bg-base-100 shadow-xl ml-12">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">Sign Up</h2>

          <label className="form-control w-full mb-3">
            <div className="label">
              <span className="label-text">Full Name</span>
            </div>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full mb-3">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full mb-3">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full mb-4">
            <div className="label">
              <span className="label-text">Confirm Password</span>
            </div>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input input-bordered w-full"
            />
          </label>

          <button className="btn btn-primary w-full mt-2">Create Account</button>

          <p className="text-center text-sm mt-3 text-base-content/70">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-primary hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
