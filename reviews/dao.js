import model from "./model.js";

export const deleteReview = (review) => model.deleteOne({ review: review });

export const findReviewsForUser = (userId) => model.find({ user: userId });

export const createReview = (review) => model.create(review);