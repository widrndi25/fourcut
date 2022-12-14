import path from "path";
import multer from "multer";

// FIXME: 객체화해서 내보내기 및 코드 효율화

export const upload1 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/photos");
  },
  filename: (req, file, cb) => {
    const newFileName = 1 + path.extname(file.originalname);
    cb(null, newFileName);
  },
});
export const upload2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/photos");
  },
  filename: (req, file, cb) => {
    const newFileName = 2 + path.extname(file.originalname);
    cb(null, newFileName);
  },
});
export const upload3 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/photos");
  },
  filename: (req, file, cb) => {
    const newFileName = 3 + path.extname(file.originalname);
    cb(null, newFileName);
  },
});
export const upload4 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/photos");
  },
  filename: (req, file, cb) => {
    const newFileName = 4 + path.extname(file.originalname);
    cb(null, newFileName);
  },
});
