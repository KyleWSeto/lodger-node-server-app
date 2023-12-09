import * as dao from "./dao.js";

function ReviewsRoutes(app) {
    const deleteReview = async (req, res) => {
        const status = await dao.deleteReview(req.params.review);
        res.json(status);
      };
      const findReviewsForUser = async (req, res) => {
        const reviews = await dao.findReviewsForUser();
        res.json(reviews);
      };
      const createReview = async (req, res) => {
        const review = await dao.createReview(req.body);
        res.json(review);
      };
      app.post("/api/users/:userId/reviews", createReview);
      app.get("/api/users/:userId/reviews", findReviewsForUser);
      app.delete("/api/reviews/:reviewId", deleteReview);
}

export default ReviewsRoutes;