import model from "./model.js";

export const deleteReview = (reviewId) => model.deleteOne({ _id : reviewId });

export const findReviewsForUser = (userId) => model.find({ userId: userId });

export const createReview = (review) => model.create(review);