import * as dao from "./dao.js";

function HotelsRoutes(app) {
  const findAllHotels = async (req, res) => {
    console.log("findAllHotels");
    const likes = await dao.findAllHotels();
    res.send(likes);
  };

  app.get("/api/hotels", findAllHotels);
}

export default HotelsRoutes;