import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        review: String,
        description: String,
        reviewId: String,
    },
    { collection: "reviews" }
);
export default schema;