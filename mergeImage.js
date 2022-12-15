import fs from "fs";
import mergeImages from "merge-images";
import { Canvas, Image } from "canvas";

const readFiles = () => {
  const IMG_FOLDER_LIST = ["", "dir2", "dir3", "dir4", "dir5"];

  const fileReader = (dirArr) => {
    return dirArr.map((dir) => fs.readFileSync(dir).map((fileName) => dir + "/" + fileName));
  };
  return fileReader(IMG_FOLDER_LIST);
};
