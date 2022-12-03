// GLobal(전역적인 것들)
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

//Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//Pictrue
const PICTURE = "/picture";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,

  join: JOIN,

  login: LOGIN,

  logout: LOGOUT,

  users: USERS,

  userDetail: USER_DETAIL,

  editProfile: EDIT_PROFILE,

  changePassword: CHANGE_PASSWORD,

  picture: PICTURE,

  upload: UPLOAD,

  videoDetail: VIDEO_DETAIL,

  editVideo: EDIT_VIDEO,

  deleteVideo: DELETE_VIDEO,
};

export default routes;
