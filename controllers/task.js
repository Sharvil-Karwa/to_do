const List = require("../models/list");
const Task = require("../models/task");

exports.createTask = async function (req, res, next) {
  try {
    const list = await List.findById(req.params.id);
    const { title, description } = req.body;
    const task = await Task.create({
      title,
      description,
    });
    list.tasks.push(task);
    list.save();
    res.status(404).json({
      list,
      task,
    });
  } catch (err) {
    res.status(404).json({
      err,
    });
  }
};

exports.getAllTasks = async function (req, res, next) {
  try {
    const list = await List.findById(req.params.id);
    const tasks = list.tasks;
    const data = {};
    for (let i = 0; i < tasks.length; i++) {
      const task = await Task.findById(tasks[i]);
      data[i] = task;
    }
    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(404).json({
      err,
    });
  }
};

exports.deleteTask = async function (req, res, next) {
  try {
    const task = await Task.findById(req.params.taskId);
    const list = await List.findById(req.params.id);
    list.tasks.remove(task);
    list.save();
    task.remove();
    res.status(200).json({
      success: true,
      task,
    });
  } catch (err) {
    res.status(404).json({
      err,
    });
  }
};

exports.updateTask = async function (req, res, next) {
  try {
    const task = await Task.findById(req.params.taskId);
    if (req.body.title) task.title = req.body.title;
    if (req.body.description) task.description = req.body.description;
    task.save();
    res.status(200).json({
      success: true,
      task,
    });
  } catch (err) {
    res.status(404).json({
      err,
    });
  }
};
