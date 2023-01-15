const express = require("express");
const router = express.Router();

const {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask,
} = require("../controllers/task");

router.get("/:id", getAllTasks);
router.post("/:id", createTask);
router.put("/:taskId", updateTask);
router.delete("/:id/:taskId", deleteTask);
module.exports = router;
