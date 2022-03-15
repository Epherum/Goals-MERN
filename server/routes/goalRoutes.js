const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  putGoals,
  deleteGoals,
} = require("../controllers/goalControllers");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);

router.route("/:id").put(protect, putGoals).delete(protect, deleteGoals);

module.exports = router;
