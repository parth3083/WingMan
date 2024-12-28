import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: [6, "Email should be minimum 6 characters long"],
    maxLength: [50, "Email should be maximum 50 characters long"],
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
});

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

userSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = function () {
  return jwt.sign({ email: this.email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const User = mongoose.model("user", userSchema);

export default User;
