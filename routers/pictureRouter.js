import express from "express";
import { picture } from "../controllers/pictureController";
import routes from "../router";

const pictureRouter = express.Router();

pictureRouter.get(routes.home, picture);

export default pictureRouter;
