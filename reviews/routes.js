import * as dao from "./dao.js";

function ReviewsRoutes(app) {
    const deleteReview = async (req, res) => {
        const status = await dao.deleteReview(req.params.review);
        res.json(status);
      };
      const findReviewsForUser = async (req, res) => {
        const { userId } = req.params;
        const reviews = await dao.findReviewsForUser(userId);
        res.send(reviews);
      };
      const createReview = async (req, res) => {
        const review = await dao.createReview(req.body);
        res.json(review);
      };
      app.delete("/api/reviews/:reviewId", deleteReview);
      app.get("/api/users/:userId/reviews", findReviewsForUser);
      app.post("/api/users/:userId/reviews", createReview);
}

export default ReviewsRoutes;