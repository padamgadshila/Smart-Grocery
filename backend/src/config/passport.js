import passport from "passport";
import pkg from "passport-google-oauth20";
const { Strategy: GoogleStrategy } = pkg;
import { User } from "../models/user.model.js";
import dotnev from "dotenv";
import jwt from "jsonwebtoken";

dotnev.config();
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;
        const [fname, ...lnameParts] = profile.displayName.split(" ");
        const lname = lnameParts.join(" ") || "";

        let user = await User.findOne({ email });

        // If user doesn't exist, create a new one
        if (!user) {
          user = new User({
            fname,
            lname,
            email,
            password: "google-auth", // dummy placeholder (won’t be used)
          });
          await user.save();
        }

        const token = jwt.sign(
          { userId: user._id },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: "7d",
          }
        );

        return done(null, { user, token });
      } catch (err) {
        return done(err, null);
      }
    }
  )
);
