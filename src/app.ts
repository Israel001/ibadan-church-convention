import path from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express, { Application } from "express";
import session from "express-session";
import passport from "passport";

import router from "./routes/index";
import "./configs/db";

const app: Application = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// session and passport middleware
app.use(
  session({
    secret: process.env.PASSPORT_SECRET || "anythingcanbesecret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
import "./configs/passport";
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
// router
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
