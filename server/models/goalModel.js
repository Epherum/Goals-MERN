const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: "string",
      required: [true, "pls type smthing"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Goal", goalSchema);
