import express from "express";
import {
  choosePhoto,
  deletePhoto,
  frame,
  photo,
  postUpload,
  sendMail,
} from "../controllers/photoController";
import { uploadPhoto1, uploadPhoto2, uploadPhoto3, uploadPhoto4 } from "../localsMiddleware";
import routes from "../router";

const photoRouter = express.Router();

photoRouter.get(routes.home, deletePhoto, photo);
photoRouter.get(routes.choosePhoto, choosePhoto);
photoRouter.post(routes.upload1, uploadPhoto1, postUpload);
photoRouter.post(routes.upload2, uploadPhoto2, postUpload);
photoRouter.post(routes.upload2, uploadPhoto3, postUpload);
photoRouter.post(routes.upload2, uploadPhoto4, postUpload);
photoRouter.get(routes.delete, deletePhoto);
photoRouter.get(routes.frame, frame);
photoRouter.get(routes.sendMail, sendMail);

export default photoRouter;
