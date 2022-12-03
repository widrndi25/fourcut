import express from "express";
import { choosePhoto, frame, photo, sendMail } from "../controllers/photoController";
import routes from "../router";

const photoRouter = express.Router();

photoRouter.get(routes.home, photo);
photoRouter.get(routes.choosePhoto, choosePhoto);
photoRouter.get(routes.frame, frame);
photoRouter.get(routes.sendMail, sendMail);

export default photoRouter;
