import fs from "fs";
import fsExtra from "fs-extra";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import routes from "../router";

dotenv.config();

function handleDeletePhoto(filename) {
  const deletePhoto = fs.unlink(
    path.join(__dirname, "..", `uploads/photos/${filename}.jpg`),
    (err) => {
      try {
        throw err;
      } catch {
        console.log("음 기달려봐");
      }
      console.log("파일 삭제 완료");
    }
  );

  return deletePhoto;
}

export const photo = (req, res) => res.render("photo");
export const frame = (req, res) => res.render("frame");
export const choosePhoto = async (req, res) => {
  res.render("choosePhoto");
};
export const postUpload = async (req, res) => {
  res.redirect(routes.photo + routes.choosePhoto);
};
export const deletePhoto1 = (req, res) => {
  handleDeletePhoto("1");
  res.redirect(routes.photo + routes.choosePhoto);
};
export const deletePhoto2 = (req, res) => {
  handleDeletePhoto("2");
  res.redirect(routes.photo + routes.choosePhoto);
};
export const deletePhoto3 = (req, res) => {
  handleDeletePhoto("3");
  res.redirect(routes.photo + routes.choosePhoto);
};

export const deletePhoto4 = (req, res) => {
  handleDeletePhoto("4");
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
export const sendMail = (req, res) => {
  res.render("sendMail");
};

export const postMail = async (req, res) => {
  const {
    body: { email },
  } = req;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "stmp.gmail.com",
    port: "587",
    secure: false,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });
  let info = await transporter.sendMail({
    from: `"화양필름" <${process.env.SENDER_EMAIL}>`,
    to: email,
    subject: "화양필름 사진이 도착했어요!",
    text: "테스트입니다.",
  });
  res.render("done");
};
