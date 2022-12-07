import path from "path";
import multer from "multer";
import routes from "./router";

const storage1 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/photos");
  },
  filename: (req, file, cb) => {
    let newFileName = "1" + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/photos");
  },
  filename: (req, file, cb) => {
    let newFileName = "2" + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const multerPhotos1 = multer({ storage: storage1 });
const multerPhotos2 = multer({ storage: storage2 });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "화양네컷";
  res.locals.routes = routes;
  next();
};
export const uploadPhoto1 = multerPhotos1.single("photo1");
export const uploadPhoto2 = multerPhotos2.single("photo2");
