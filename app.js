import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from "path";
import globalRouter from "./routers/globalRouter";
import { localsMiddleware } from "./localsMiddleware";
import routes from "./router";
import photoRouter from "./routers/photoRouter";

const app = express();

app.set("view engine", "pug");
app.use("/static", express.static("static"));
app.use("/uploads/photos", express.static(path.join(__dirname, "uploads/photos")));
app.use("/uploads/frames", express.static(path.join(__dirname, "uploads/frames")));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.photo, photoRouter);

export default app;
