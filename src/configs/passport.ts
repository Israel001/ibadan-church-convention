import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import { Request, Response, NextFunction } from "express";

import { User } from "../models";

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({
          where: { email },
        });
        if (!user) {
          return done(null, false, { message: "Incorrect email." });
        }
        //@ts-ignore
        const passVal = bcrypt.compareSync(password, user.password);
        if (!passVal) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: number, done) => {
  User.findByPk(id).then((user) => {
    done(null, user);
  });
});

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

export const isNotLoggedIn = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  //@ts-ignore
  if (req.isAuthenticated() && req.user?.isAdmin) {
    return next();
  }
  res.redirect("/");
};

export default passport;
