import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    id: Number,
      name: String,
      iataCode: String,
      subType: String,
      relevance: Number,
      type: String,
      hotelIds: Array,
      address: Object,
      geoCode: Object,
  },
  { collection: "hotels" }
);
export default schema;