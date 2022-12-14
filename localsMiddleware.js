import multer from "multer";
import routes from "./router";
import { upload1, upload2, upload3, upload4 } from "./upload";

// TODO:코드 효율화

const multerPhotos1 = multer({ storage: upload1 });
const multerPhotos2 = multer({ storage: upload2 });
const multerPhotos3 = multer({ storage: upload3 });
const multerPhotos4 = multer({ storage: upload4 });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "화양네컷";
  res.locals.routes = routes;
  next();
};
export const uploadPhoto1 = multerPhotos1.single("photo1");
export const uploadPhoto2 = multerPhotos2.single("photo2");
export const uploadPhoto3 = multerPhotos3.single("photo3");
export const uploadPhoto4 = multerPhotos4.single("photo4");
