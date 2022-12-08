import path from "path";
import multer from "multer";
import routes from "./router";

function storage(fileNumber) {
  multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/photos");
    },
    filename: (req, file, cb) => {
      const newFileName = fileNumber + path.extname(file.originalname);
      cb(null, newFileName);
    },
  });
}

const firstPhoto = storage("1");
const secondPhoto = storage("2");
const thirdPhoto = storage("3");
const fourthPhoto = storage("4");

const multerPhotos1 = multer({ storage: firstPhoto });
const multerPhotos2 = multer({ storage: secondPhoto });
const multerPhotos3 = multer({ storage: thirdPhoto });
const multerPhotos4 = multer({ storage: fourthPhoto });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "화양네컷";
  res.locals.routes = routes;
  next();
};
export const uploadPhoto1 = multerPhotos1.single("photo1");
export const uploadPhoto2 = multerPhotos2.single("photo2");
export const uploadPhoto3 = multerPhotos3.single("photo2");
export const uploadPhoto4 = multerPhotos4.single("photo2");
