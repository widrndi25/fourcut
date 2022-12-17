/* eslint-disable no-unused-vars */
import fs from "fs";
import fsExtra from "fs-extra";
import path from "path";
import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import sharp from "sharp";
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

function makePhotoList() {
  const photos = [
    path.join(__dirname, "..", `uploads/photos/1.jpg`),
    path.join(__dirname, "..", `uploads/photos/2.jpg`),
    path.join(__dirname, "..", `uploads/photos/3.jpg`),
    path.join(__dirname, "..", `uploads/photos/4.jpg`),
  ].map((file) => ({
    input: file,
  }));
  return photos;
}
async function resizePhoto(fileNumber) {
  const photos = makePhotoList();
  await sharp(photos[fileNumber - 1].input)
    .resize(660, 860, { fit: "contain" }) // fit : contain 가로 세로 비율을 강제 유지
    .withMetadata() // 원본 이미지의 메타데이터 포함
    .toFormat("jpeg", { quality: 100 }) // 포맷, 퀄리티 지정
    .toFile(path.join(__dirname, "..", `uploads/done/${fileNumber}.jpg`), (err, info) => {
      console.log(`리사이징 이미지 info : ${JSON.stringify(info, null, 2)}`);
    })
    .toBuffer();
}
async function mergePhoto() {
  const resizePhotos = [
    path.join(__dirname, "..", `uploads/frames/black.jpg`),
    path.join(__dirname, "..", `uploads/done/1.jpg`),
    path.join(__dirname, "..", `uploads/done/2.jpg`),
    path.join(__dirname, "..", `uploads/done/3.jpg`),
    path.join(__dirname, "..", `uploads/done/4.jpg`),
  ].map((file) => ({ input: file }));

  await sharp(resizePhotos[0].input)
    .composite([
      { input: resizePhotos[1].input, left: 44, top: 53 },
      { input: resizePhotos[2].input, left: 784, top: 53 },
      { input: resizePhotos[3].input, left: 44, top: 952 },
      { input: resizePhotos[4].input, left: 784, top: 952 },
    ])
    .toFormat("jpeg", { quality: 100 }) // 포맷, 퀄리티 지정
    .toFile(path.join(__dirname, "..", `uploads/done/final.jpg`));
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
export const deletePhotoAll = (req, res, next) => {
  fsExtra.emptyDir(path.join(__dirname, "..", "uploads/done"), (err) => {
    try {
      throw err;
    } catch {
      console.log("조끔만 더 기달려봐");
    }
  });
  fsExtra.emptyDir(path.join(__dirname, "..", "uploads/photos"), (err) => {
    try {
      throw err;
    } catch {
      console.log("조끔만 더 기달려봐");
    }
  });
  next();
};
export const sendMail = (req, res) => {
  res.render("sendMail");
};
export const mergeImage = async (req, res) => {
  resizePhoto(1);
  resizePhoto(2);
  resizePhoto(3);
  resizePhoto(4);

  await mergePhoto();

  await res.redirect(routes.photo + routes.sendMail);
};
export const postMail = async (req, res) => {
  const {
    body: { email, userName },
  } = req;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "stmp.gmail.com",
    port: "587",
    secure: false,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `"화양필름" <${process.env.SENDER_EMAIL}>`,
    to: email,
    subject: `${userName}님 안녕하세요! 화양필름이 도착했습니다!`,
    text: `안녕하세요 ${userName}님! \n
     ${userName}님이 돌고개 축제 때 만드신 소중한 추억이 도착했습니다! \n
     좋은 추억이 되셨기를 바라며 ${userName}님의 앞날이 꽃길이기를 바랍니다. :)`,
    attachments: [
      {
        filename: "done.png",
        path: path.join(__dirname, "..", `uploads/done/final.jpg`),
      },
    ],
  });
  res.render("done");
};
