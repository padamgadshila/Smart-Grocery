import express from "express";
import { login, signup } from "../controllers/auth.controller.js";
import "../config/passport.js";
import passport from "passport";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// google sign in

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const { token, user } = req.user;
    res.redirect(
      `http://localhost:3000/auth/success?token=${token}&name=${user.name}`
    );
  }
);
export default router;
