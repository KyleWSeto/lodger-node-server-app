import * as dao from "./dao.js";

function LikesRoutes(app) {
  const findAllLikes = async (req, res) => {
    console.log("findAllLikes");
    const likes = await dao.findAllLikes();
    res.send(likes);
  };
  const createUserLikesHotel = async (req, res) => {
    const { userId, hotelId } = req.params;
    const like = await dao.createUserLikesHotel(userId, hotelId);
    res.send(like);
  };
  const findHotelsUserLikes = async (req, res) => {
    const { userId } = req.params;
    const likes = await dao.findHotelsUserLikes(userId);
    res.send(likes);
  };
  const findUsersWhoLikeHotel = async (req, res) => {
    const { hotelId } = req.params;
    const likes = await dao.findUsersWhoLikeHotel(hotelId);
    res.send(likes);
  };

  app.get("/api/likes", findAllLikes);
  app.post("/api/users/:userId/likes/:hotelId", createUserLikesHotel);
  app.get("/api/users/:userId/likes", findHotelsUserLikes);
  app.get("/api/albums/:hotelId/likes", findUsersWhoLikeHotel);
}

export default LikesRoutes;