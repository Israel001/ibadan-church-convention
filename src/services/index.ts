import { Request, Response } from "express";
import { Church, Delegate, User } from "../models";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import sendEmail from "../configs/mail";

export * from "./functions";

export const pageNotFound = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    user: req.user || null,
    message: "Route does not exist",
  });
};

export const homePage = (req: Request, res: Response) => {
  const { user } = req;
  res.render("index", { user: user || null });
};

export const loginPage = (req: Request, res: Response) => {
  // console.log(req.hostname, req.ip, req.protocol, req.get("host"));
  //@ts-ignore
  // console.log(req.session.messages);
  //@ts-ignore
  if (req.session.messages) {
    res.render("login", {
      //@ts-ignore
      message: req.session.messages[req.session.messages.length - 1],
      user: req.user || null,
    });
  } else {
    res.render("login", { user: req.user || null });
  }
};

export const registerPage = (req: Request, res: Response) => {
  res.render("register", { user: req.user || null });
};

export const addNewChurchPage = async (req: Request, res: Response) => {
  const churches = await Church.findAll({});
  res.render("add_new_church", {
    user: req.user || null,
    successmsg: req.query.message,
    churches: churches,
  });
};

export const addNewDelegatePage = async (req: Request, res: Response) => {
  const delegates = await Delegate.findAll({
    include: { model: Delegate, as: "children" },
  });
  res.render("delegate", {
    user: req.user || null,
    successmsg: req.query.message,
    errormsg: req.query.errormessage,
    delegates: delegates,
  });
};

export const conventionRegistrationPage = async (
  req: Request,
  res: Response
) => {
  const delegates = await Delegate.findAll({
    include: { model: Delegate, as: "children" },
  });
  const churches = await Church.findAll({});
  res.render("conventionRegistration", {
    delegates,
    churches,
    user: req.user || null,
    successmsg: req.query.message,
    message: req.query.errormessage,
  });
};

export const regStatusPage = async (req: Request, res: Response) => {
  const delegates = await Delegate.findAll({
    include: { model: Delegate, as: "children" },
  });
  const churches = await Church.findAll({});
  res.render("reg_status", {
    delegates,
    churches,
    user: req.user || null,
    successmsg: req.query.message,
  });
};

export const forgotPasswordPage = (_req: Request, res: Response) => {
  res.render("forgot");
};

export const resetPasswordPage = (req: Request, res: Response) => {
  const { token } = req.params;
  try {
    const decrypted = decrypt(token);
    const [emailFromToken, dateFromToken] = decrypted.split(":");
    res.render("reset", { token, email: emailFromToken });
  } catch (err) {
    console.log(err);
    res.render("reset", { message: "Invalid token" });
  }
};

export const register = async (req: Request, res: Response) => {
  const { email, password, confirmPassword } = req.body;
  try {
    if (!password)
      return res.render("register", {
        message: "Password cannot be empty",
      });

    if (password !== confirmPassword)
      return res.render("register", {
        message: "Passwords do not match",
      });

    const user = await User.findOne({
      where: { email },
    });

    if (user)
      return res.render("register", {
        message: "User already exists",
      });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await User.create({
      email,
      password: hash,
    });

    req.login(newUser, (err) => {
      if (err) throw err;
      res.redirect("/");
    });
  } catch (error) {
    console.log(error);
    res.render("register", {
      message: "Error creating new user",
    });
  }
};

export const logout = (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) throw err;
    res.redirect("/login");
  });
};

export const resetPassword = async (req: Request, res: Response) => {
  const { email, password, confirmPassword, resetToken } = req.body;
  try {
    const decrypted = decrypt(resetToken);
    const [emailFromToken, dateFromToken] = decrypted.split(":");
    if (email !== emailFromToken)
      return res.render("reset", {
        message: "Invalid token",
      });
    if (Date.now() > parseInt(dateFromToken))
      return res.render("reset", {
        message: "Token expired",
      });
    if (password !== confirmPassword)
      return res.render("reset", {
        message: "Passwords do not match",
      });

    const user = await User.findOne({
      where: { email },
    });
    if (!user) return res.render("reset", { message: "User does not exist" });
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    // @ts-ignore
    user.password = hash;
    await user.save();
    // @ts-ignore
    req.session.message = "Password reset successful";
    res.redirect("/login");
  } catch (error) {
    console.log(error);
    res.render("reset", {
      message: "Error resetting password",
    });
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    if (!email)
      return res.render("forgot", {
        message: "Please enter your email",
      });
    const user = await User.findOne({
      where: { email },
    });

    if (!user)
      return res.render("forgot", {
        message: "User does not exist",
      });
    const date = Date.now() + 1000 * 60 * 10;
    const encrypted = encrypt(email + ":" + date);
    sendEmail({
      email: email as string,
      subject: "Password Reset",
      message: `Click the link below to reset your password the link expires in 10 minute: ${
        req.protocol
      }://${req.get("host")}/reset/${encrypted}`,
    });
    res.render("forgot", {
      message: "Password reset link sent to your email",
    });
  } catch (error) {
    console.log(error);
    res.render("forgot", {
      message: "Error resetting password",
    });
  }
};

const algorithm = "aes-256-cbc";

const key = crypto.randomBytes(32);

function encrypt(text: string) {
  const iv = crypto.randomBytes(16);
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return `${iv.toString("hex")}.${encrypted.toString("hex")}`;
}

function decrypt(text: string) {
  const textParts = text.split(".");
  let iv = Buffer.from(textParts[0], "hex");
  let encryptedText = Buffer.from(textParts[1], "hex");

  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);

  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
}
