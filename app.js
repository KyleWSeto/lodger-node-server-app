import express from 'express';
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import UserRoutes from "./users/routes.js";
import FollowsRoutes from "./follows/routes.js";
import LikesRoutes from "./likes/routes.js";
import ReviewsRoutes from "./reviews/routes.js";
import HotelsRoutes from "./hotels/routes.js";
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

FollowsRoutes(app);
LikesRoutes(app);
UserRoutes(app);
ReviewsRoutes(app);
HotelsRoutes(app);
app.listen(4000);