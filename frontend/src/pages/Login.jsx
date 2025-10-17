import React from "react";
import { PiStarFourBold } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-evenly bg-base-200">
      {/* Left Content */}
      <div className="flex flex-col max-w-xl space-y-6">
        <h1 className="text-5xl font-bold text-primary">Welcome Back!</h1>
        <p className="text-lg text-base-content/80">
          Please login to your account to continue learning.
        </p>

        <p className="text-xl font-semibold mt-6">Learn languages naturally</p>
        <p className="text-base-content/70">
          Your AI-powered language tutor that adapts to your learning style.
          Practice conversations, master grammar, and track your progress.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="card border border-base-300 shadow-md hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <PiStarFourBold className="text-4xl text-primary mb-2" />
              <h2 className="card-title">AI Conversations</h2>
              <p className="text-sm text-base-content/70">
                Natural dialogue practice
              </p>
            </div>
          </div>

          <div className="card border border-base-300 shadow-md hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <IoPersonOutline className="text-4xl text-secondary mb-2" />
              <h2 className="card-title">Personalized Exercises</h2>
              <p className="text-sm text-base-content/70">
                Adaptive learning path
              </p>
            </div>
          </div>

          <div className="card border border-base-300 shadow-md hover:shadow-xl transition">
            <div className="card-body items-center text-center">
              <CiTrophy className="text-4xl text-accent mb-2" />
              <h2 className="card-title">Track Progress</h2>
              <p className="text-sm text-base-content/70">
                Earn badges & streaks
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Login Form */}
      <div className="card w-96 bg-base-100 shadow-xl ml-12">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">Login</h2>
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

          <button className="btn btn-primary w-full mt-2">Login</button>
          <p className="text-center text-sm mt-3 text-base-content/70">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-primary hover:underline"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
