const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const RegisterUser = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    return res.json({ token: generateToken(user._id) });
  } catch (error) {
    console.log(error);
    return res.json({ error });
  }
};

const LoginUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });

    if (user && user.matchPassword(req.body.password)) {
      return res.json({ token: generateToken(user._id) });
    } else {
      console.log(error);
      return res.json({ error: "invalid email or password" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ error: "invalid email or password" });
  }
};

const getuserProfile = async (req, res) => {
  return res.json(req.user);
};

const updateuserProfile = async (req, res) => {
  const user = await userModel.findByIdAndUpdate(
    req.user._id,
    {
      name: req.body.name,
    },
    {
      new: true,
    }
  );
  return res.json(user);
};

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
  return token;
};

module.exports = { RegisterUser, LoginUser, getuserProfile, updateuserProfile };
