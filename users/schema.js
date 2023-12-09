import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
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