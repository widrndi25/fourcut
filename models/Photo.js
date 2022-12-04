import mongoose from "mongoose";

const PhotoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,

    required: "File URL is required",
  },
});

const model = mongoose.model("Photo", PhotoSchema);

export default model;
