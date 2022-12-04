import express from "express";
import { choosePhoto, frame, photo, postUpload, sendMail } from "../controllers/photoController";
import { uploadPhoto } from "../localsMiddleware";
import routes from "../router";

const photoRouter = express.Router();

photoRouter.get(routes.home, photo);
photoRouter.get(routes.choosePhoto, choosePhoto);
photoRouter.get(routes.frame, frame);
photoRouter.get(routes.sendMail, sendMail);
photoRouter.post(routes.upload, uploadPhoto, postUpload);

export default photoRouter;
