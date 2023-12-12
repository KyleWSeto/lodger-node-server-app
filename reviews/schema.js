import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        review: String,
        description: String,
        userId: String,
    },
    { collection: "reviews" }
);
export default schema;