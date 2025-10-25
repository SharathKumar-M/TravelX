const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await userModel.findById(decoded.id).select("-password");
      console.log(req.user);

      next();
    } else {
      return res.json({ message: "not authorised" });
    }
  } catch (error) {
    console.log(error);
    res.json({ error: "not authorised" });
  }
};

module.exports = { protect };
