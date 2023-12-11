import model from "./model.js";

export const findAllLikes = () => model.find();
export const createUserLikesHotel = (userId, hotelId) =>
  model.create({ user: userId, hotelId: hotelId });
export const deleteUserLikesHotel = (userId, hotelId) =>
  model.deleteOne({ user: userId, hotelId: hotelId });
export const findHotelsUserLikes = (userId) => model.find({ user: userId });
export const findUsersWhoLikeHotel = (hotelId) =>
  model.find({ hotelId: hotelId });