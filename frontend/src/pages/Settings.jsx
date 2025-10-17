import React from "react";
import { CiSettings } from "react-icons/ci";
import { FaUserCircle, FaGlobe } from "react-icons/fa";

const Settings = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-base-200 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 w-full max-w-2xl">
        <CiSettings className="text-4xl text-primary" />
        <h1 className="text-3xl font-semibold text-gray-800">Settings</h1>
      </div>
      <p className="mb-8 text-gray-600 w-full max-w-2xl">
        Customize your learning experience
      </p>

      {/* Cards Container */}
      <div className="w-full max-w-2xl space-y-6">
        {/* Profile Card */}
        <div className="card bg-base-100 shadow-lg border border-gray-200 rounded-lg">
          <div className="card-body">
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-4">
              <FaUserCircle className="text-primary" size={28} />
              <h2 className="card-title text-xl font-bold text-gray-800">
                Profile
              </h2>
            </div>

            {/* Form */}
            <form className="space-y-4">
              {/* Display Name */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">Display Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Language Learner"
                  defaultValue="Language Learner"
                  className="input input-bordered w-full input-primary"
                />
              </div>

              {/* Email */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="learner@example.com"
                  defaultValue="learner@example.com"
                  className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                  disabled
                />
              </div>

              {/* Save Button */}
              <div className="flex justify-end mt-4">
                <button type="submit" className="btn btn-primary">
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Language Preferences Card */}
        <div className="card bg-base-100 shadow-lg border border-gray-200 rounded-lg">
          <div className="card-body">
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-4">
              <FaGlobe className="text-primary" size={28} />
              <h2 className="card-title text-xl font-bold text-gray-800">
                Language Preferences
              </h2>
            </div>

            {/* Form */}
            <form className="space-y-4">
              {/* Target Language */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">Target Language</span>
                </label>
                <select
                  className="select select-bordered select-primary w-full"
                  defaultValue="es"
                >
                  <option disabled>Select a language</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="te">Telugu</option>
                  <option value="en">English</option>
                </select>
              </div>

              {/* Proficiency Level */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">Proficiency Level</span>
                </label>
                <select
                  className="select select-bordered select-primary w-full"
                  defaultValue="intermediate"
                >
                  <option disabled>Select your level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="fluent">Fluent</option>
                </select>
              </div>

              {/* Update Button */}
              <div className="flex justify-end mt-4">
                <button type="submit" className="btn btn-secondary">
                  Update Preferences
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
