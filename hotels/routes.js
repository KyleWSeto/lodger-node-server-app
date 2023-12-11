import * as dao from "./dao.js";

function HotelsRoutes(app) {
  const findAllHotels = async (req, res) => {
    console.log("findAllHotels");
    const likes = await dao.findAllHotels();
    res.send(likes);
  };

  const findHotelById = async (req, res) => {
    const hotel = await dao.findHotelById(req.params.id);
    res.json(hotel);
  };

  app.get("/api/hotels", findAllHotels);
  app.get("/api/hotels/:id", findHotelById);
}

export default HotelsRoutes;