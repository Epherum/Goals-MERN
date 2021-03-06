const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json({ goals });
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field ");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json({ goal });
});

const putGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Please");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(400);
    throw new Error("not same user");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ updatedGoal });
});
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Please");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(400);
    throw new Error("not same user");
  }

  await goal.remove();
  res.status(200).json({ message: "goal deleted" });
});

module.exports = { getGoals, setGoal, putGoals, deleteGoals };
