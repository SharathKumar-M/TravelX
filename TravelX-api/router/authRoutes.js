const express = require("express");
const {
  RegisterUser,
  LoginUser,
  getuserProfile,
  updateuserProfile,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", RegisterUser);

router.post("/login", LoginUser);

router.get("/profile", protect, getuserProfile);

router.put("/profile", protect, updateuserProfile);

module.exports = router;
