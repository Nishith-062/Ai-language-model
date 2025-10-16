import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
    language: { type: String, default: "English" },
    progress: {
      level: { type: Number, default: 1 },
      streak: { type: Number, default: 0 },
      accuracy: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
