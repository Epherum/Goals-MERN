const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
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
