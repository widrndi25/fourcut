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
  fs.unlink(path.join(__dirname, "..", `uploads/done/resize.jpg`), (err) => {
    try {
      throw err;
    } catch {
      console.log("음 기달려봐");
    }
    console.log("파일 삭제 완료");
  });
  fsExtra.emptyDir(path.join(__dirname, "..", "uploads/photos"), (err) => {
    try {
      throw err;
    } catch {
      console.log("조끔만 더 기달려봐");
    }
  });
  res.redirect(routes.photo + routes.choosePhoto);
};
export const sendMail = (req, res) => {
  res.render("sendMail");
};
export const mergeImage = async (req, res) => {
  const images = [path.join(__dirname, "..", `uploads/photos/2.jpg`)].map((file) => ({
    input: file,
  }));
  await sharp(images[0].input)
    .resize(660, 860, { fit: "contain" }) // fit : contain 가로 세로 비율을 강제 유지
    .withMetadata() // 원본 이미지의 메타데이터 포함
    .toFormat("jpeg", { quality: 100 }) // 포맷, 퀄리티 지정
    .toFile(path.join(__dirname, "..", `uploads/done/done.jpg`), (err, info) => {
      // 리사이징된 이미지를 로컬에 저장
      console.log(`리사이징 이미지 info : ${JSON.stringify(info, null, 2)}`);
    })
    .toBuffer() // 리사이징된 이미지를 노드에서 읽을수 있게 buffer로 변환
    .then((data) => {
      console.log("완성 했다!");
    })
    .catch((err) => {
      console.log("음 에러 났는데 뭐지: ", err);
    });
  res.redirect(routes.photo + routes.sendMail);
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
    attachments: [
      {
        filename: "done.png",
        path: path.join(__dirname, "..", `uploads/done/resize.jpg`),
      },
    ],
  });
  res.render("done");
};
