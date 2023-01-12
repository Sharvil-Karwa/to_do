const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
  },
});

const Task = mongoose.model("task", TaskSchema);

module.exports = Task;
