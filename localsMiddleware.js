import routes from "./router";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "화양네컷";

  res.locals.routes = routes;

  next();
};
