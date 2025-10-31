const { generateState, generateCodeVerifier } = require("arctic");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "10d" });
};

const RegisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Please add all fields" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = await User.create({ name, email, password });
    if (user) {
      res.status(201).json({ token: generateToken(user._id) });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({ token: generateToken(user._id) });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const getuserProfile = async (req, res) => {
  res.json(req.user);
};

const updateuserProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name: req.body.name },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const oauthCallback = async (req, res) => {
  if (req.user) {
    const token = generateToken(req.user._id);
    console.log("Generated Token for OAuth User:", token);
    res.redirect(`${process.env.FRONTEND_URL}/?token=${token}`);
  } else {
    console.error("No user in req after OAuth");
    res.redirect(`${process.env.FRONTEND_URL}/?error=OAuth failed`);
  }
};

module.exports = {
  RegisterUser,
  LoginUser,
  getuserProfile,
  updateuserProfile,
  oauthCallback,
};
