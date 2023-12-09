import model from "./model.js";

export const deleteReview = (review) => model.deleteOne({ review: review });

export const findReviewsForUser = () => model.find();

export const createReview = (review) => model.create(review);