import fs from "fs";
import fsExtra from "fs-extra";
import path from "path";
import routes from "../router";

export const photo = (req, res) => res.render("photo");
export const frame = (req, res) => res.render("frame");
export const sendMail = (req, res) => res.render("sendMail");
export const choosePhoto = async (req, res) => {
  res.render("choosePhoto");
};
export const postUpload = async (req, res) => {
  res.redirect(routes.photo + routes.choosePhoto);
};

export const deletePhoto1 = (req, res) => {
  fs.unlink(path.join(__dirname, "..", "uploads/photos/1.jpg"), (err) => {
    try {
      throw err;
    } catch {
      console.log("음 기달려봐");
    }
    console.log("파일 삭제 완료");
  });
  res.redirect(routes.photo + routes.choosePhoto);
};
export const deletePhoto2 = (req, res) => {
  fs.unlink(path.join(__dirname, "..", "uploads/photos/2.jpg"), (err) => {
    try {
      throw err;
    } catch {
      console.log("음 기달려봐");
    }
    console.log("파일 삭제 완료");
  });
  res.redirect(routes.photo + routes.choosePhoto);
};

export const deletePhoto3 = (req, res) => {
  fs.unlink(path.join(__dirname, "..", "uploads/photos/3.jpg"), (err) => {
    try {
      throw err;
    } catch {
      console.log("음 기달려봐");
    }
    console.log("파일 삭제 완료");
  });
  res.redirect(routes.photo + routes.choosePhoto);
};

export const deletePhoto4 = (req, res) => {
  fs.unlink(path.join(__dirname, "..", "uploads/photos/4.jpg"), (err) => {
    try {
      throw err;
    } catch {
      console.log("음 기달려봐");
    }
    console.log("파일 삭제 완료");
  });
  res.redirect(routes.photo + routes.choosePhoto);
};

export const deletePhotoAll = (req, res) => {
  fsExtra.emptyDir(path.join(__dirname, "..", "uploads/photos"), (err) => {
    try {
      throw err;
    } catch {
      console.log("앙 에러띠");
    }
  });
  res.redirect(routes.photo + routes.choosePhoto);
};
