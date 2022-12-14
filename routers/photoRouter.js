import express from "express";
import {
  choosePhoto,
  deletePhoto1,
  deletePhoto2,
  deletePhoto3,
  deletePhoto4,
  deletePhotoAll,
  frame,
  photo,
  postUpload,
  sendMail,
} from "../controllers/photoController";
import { uploadPhoto1, uploadPhoto2, uploadPhoto3, uploadPhoto4 } from "../localsMiddleware";
import routes from "../router";

const photoRouter = express.Router();

photoRouter.get(routes.home, deletePhotoAll, photo);
photoRouter.get(routes.choosePhoto, choosePhoto);
photoRouter.post(routes.upload1, uploadPhoto1, postUpload);
photoRouter.post(routes.upload2, uploadPhoto2, postUpload);
photoRouter.post(routes.upload3, uploadPhoto3, postUpload);
photoRouter.post(routes.upload4, uploadPhoto4, postUpload);
photoRouter.get(routes.delete1, deletePhoto1);
photoRouter.get(routes.delete2, deletePhoto2);
photoRouter.get(routes.delete3, deletePhoto3);
photoRouter.get(routes.delete4, deletePhoto4);
photoRouter.get(routes.deleteAll, deletePhotoAll);
photoRouter.get(routes.frame, frame);
photoRouter.get(routes.sendMail, sendMail);

export default photoRouter;
