import path from "path";
import multer from "multer";

function handlePhotoUpload(filename) {
  const upload = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/photos");
    },
    filename: (req, file, cb) => {
      const newFileName = filename + path.extname(file.originalname);
      cb(null, newFileName);
    },
  });
  return upload;
}

export const upload1 = handlePhotoUpload("1");
export const upload2 = handlePhotoUpload("2");
export const upload3 = handlePhotoUpload("3");
export const upload4 = handlePhotoUpload("4");
