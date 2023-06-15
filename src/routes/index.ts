import express from "express";
import passport from "passport";
import { isLoggedIn, isNotLoggedIn } from "../configs/passport";
import {
  addNewChurch,
  addNewChurchPage,
  addNewDelegate,
  addNewDelegatePage,
  conventionRegistration,
  conventionRegistrationPage,
  forgotPassword,
  forgotPasswordPage,
  homePage,
  loginPage,
  logout,
  pageNotFound,
  register,
  registerPage,
  regStatus,
  regStatusPage,
  resetPassword,
  resetPasswordPage,
} from "../services";

const router = express.Router();

router.get("/", homePage);
router.get("/login", isNotLoggedIn, loginPage).post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureMessage: true,
  })
);
router
  .get("/register", isNotLoggedIn, registerPage)
  .post("/register", register);

router.get("/logout", isLoggedIn, logout);

router.get("/add-new-church", isLoggedIn, addNewChurchPage);
router.get("/delegate", isLoggedIn, addNewDelegatePage);
router.get("/convention-registration", isLoggedIn, conventionRegistrationPage);
router.get("/reg-status", isLoggedIn, regStatusPage);

router.get("/forgot", isNotLoggedIn, forgotPasswordPage);
router.post("/forgot", isNotLoggedIn, forgotPassword);
router.get("/reset/:token", isNotLoggedIn, resetPasswordPage);
router.post("/reset", isNotLoggedIn, resetPassword);

//Post Functionality
router.post("/add-new-church", isLoggedIn, addNewChurch);
router.post("/add-new-delegate", isLoggedIn, addNewDelegate);
router.post("/convention-registration", isLoggedIn, conventionRegistration);
router.post("/reg-status", isLoggedIn, regStatus);

router.use("*", pageNotFound);

export default router;
