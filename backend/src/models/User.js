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
    selected_lang: { type: mongoose.Schema.Types.ObjectId, ref: "Language" },
    level: { type: Number, default: 1 },
    current_exp: { type: Number, default: 0 },
    streak_count: { type: Number, default: 0 },
    proficiency_level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], default: "Beginner" },
    last_login: Date,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
