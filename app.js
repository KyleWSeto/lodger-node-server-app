import express from 'express';
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import FollowsRoutes from "./follows/routes.js";
import LikesRoutes from "./likes/routes.js";
mongoose.connect("mongodb://127.0.0.1:27017/Lodger");
const app = express();
app.use(cors());
app.use(express.json());

FollowsRoutes(app);
LikesRoutes(app);
UserRoutes(app);
app.listen(4000);