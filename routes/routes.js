const Router = require("express").Router();
const validator = require("../config/validator");
const passport = require("../config/passport");

const userController = require("../controllers/usersControllers");

const { signUpUser, signInUser, signOutUser, verifyEmail, verifyToken } =
  userController;

//Routes to users
Router.route("/auth/signUp").post(validator, signUpUser);

Router.route("/auth/signIn").post(signInUser);

Router.route("/auth/signOut").post(signOutUser);

/* Routes for validation */
Router.route("/verify/:uniqueString").get(verifyEmail);

/* Routes for token  */
Router.route("/auth/signInToken").get(
  passport.authenticate("jwt", { session: false }),
  verifyToken
);

module.exports = Router;
