import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact: String,
    interests: String,
    travelWishList: String,
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER" },
  },
  { collection: "users" });
export default userSchema;