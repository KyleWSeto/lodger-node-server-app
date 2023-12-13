import * as dao from "./dao.js";

function ReviewsRoutes(app) {
    const deleteReview = async (req, res) => {
        const { reviewId } = req.params;
        const status = await dao.deleteReview(reviewId);
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
      const updateUser = async (req, res) => {
        const { reviewId } = req.params;
        const status = await dao.updateReview(reviewId, req.body);
        res.json(status);
      };
      app.delete("/api/reviews/:reviewId", deleteReview);
      app.get("/api/users/:userId/reviews", findReviewsForUser);
      app.post("/api/users/:userId/reviews", createReview);
      app.put("/api/reviews/:reviewId", updateUser);
}

export default ReviewsRoutes;