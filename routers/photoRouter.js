import express from "express";
import { choosePhoto, frame, photo } from "../controllers/photoController";
import routes from "../router";

const photoRouter = express.Router();

photoRouter.get(routes.home, photo);
photoRouter.get(routes.choosePhoto, choosePhoto);
photoRouter.get(routes.frame, frame);

export default photoRouter;
