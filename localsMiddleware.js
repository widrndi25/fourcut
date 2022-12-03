import multer from "multer";
import routes from "./router";

const multerPhotos = multer({ dest: "photos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "화양네컷";
  res.locals.routes = routes;
  next();
};
export const uploadPhoto = multerPhotos.single("photo");
