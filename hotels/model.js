import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("hotels", schema);
export default model;