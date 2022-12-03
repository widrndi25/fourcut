import express from "express";
import { home } from "../controllers/globalController";
import routes from "../router";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

export default globalRouter;
