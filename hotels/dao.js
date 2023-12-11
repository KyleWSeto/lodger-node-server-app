import model from "./model.js";

export const findAllHotels = () => model.find();
export const findHotelById = (hotelId) => model.findOne({id : hotelId});