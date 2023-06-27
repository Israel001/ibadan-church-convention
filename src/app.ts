import path from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express, { Application, Request, Response } from "express";
import session from "express-session";
import passport from "passport";
import cors from "cors";

import router from "./routes/index";
import "./configs/db";

const app: Application = express();
const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/assets",
  express.static(path.join(__dirname, "client", "dist", "assets"))
);
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
import { isAdmin, isLoggedIn } from "./configs/passport";
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

const adminPage = async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
};

// router
app.get("/admin", isLoggedIn, isAdmin, adminPage);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
