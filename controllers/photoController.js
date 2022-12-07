import Photo from "../models/Photo";
import routes from "../router";

export const photo = (req, res) => res.render("photo");
export const frame = (req, res) => res.render("frame");
export const sendMail = (req, res) => res.render("sendMail");
export const choosePhoto = async (req, res) => {
  const photos = await Photo.find({});
  res.render("choosePhoto", { photos });
};
export const postUpload = async (req, res) => {
  const {
    file: { path },
  } = req;
  const newPhoto = await Photo.create({
    fileUrl: path,
  });
  res.redirect(routes.photo + routes.choosePhoto);
};

export const deletePhoto = async (req, res) => {
  try {
    await Photo.remove({});
  } catch (error) {
    console.log("음 어 이상한데?");
  }

  res.redirect(routes.photo + routes.choosePhoto); //비디오 삭제가 성공하던 실패하던 home으로 간다.
};
