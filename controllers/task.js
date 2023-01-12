const Task = require("../models/task");

exports.getTasks = (req, res) => {
  Task.find()
    .then((data) => res.json(data))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to get tasks", error: err.message })
    );
};

exports.createTask = (req, res) => {
  const newTask = new Task(req.body);
  newTask
    .save()
    .then((data) => res.json({ message: "Task created successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to create task", error: err.message })
    );
};

exports.updateTask = (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({ message: "Task updated successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to update task", error: err.message })
    );
};

exports.deleteTask = (req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then((data) => res.json({ message: "Task deleted successfully" }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to delete task", error: err.message })
    );
};

exports.getTask = (req, res) => {
  Task.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to get task", error: err.message })
    );
};
