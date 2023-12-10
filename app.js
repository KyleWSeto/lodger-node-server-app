/*
Some code here are from a tutorial about a community-based prototype endorsed by the Amadeus API.
Such code will be marked. For full details, visit...
Tutorial page: https://developers.amadeus.com/blog/react-hotel-booking-app-part1
Github repository: https://github.com/amadeus4dev-examples/Building-a-Hotel-Booking-App-in-NodeJS-and-React-Part-1
*/

import express from 'express';
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import UserRoutes from "./users/routes.js";
import FollowsRoutes from "./follows/routes.js";
import LikesRoutes from "./likes/routes.js";
import ReviewsRoutes from "./reviews/routes.js";
import router from "./router.js";  //
mongoose.connect("mongodb://127.0.0.1:27017/Lodger");

const app = express();
app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
   );
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  app.use(
    session(sessionOptions)
  );
  
app.use(express.json());
app.use("/", router);  //

FollowsRoutes(app);
LikesRoutes(app);
UserRoutes(app);
ReviewsRoutes(app);
app.listen(4000);