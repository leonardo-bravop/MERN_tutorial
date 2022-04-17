const express = require("express");
const {
  registerUser,
  authUser,
  updateUserProfile,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMIddleware");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").put(protect, updateUserProfile);

module.exports = router;
