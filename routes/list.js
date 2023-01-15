const express = require("express");
const router = express.Router();

const {
  getLists,
  createList,
  getList,
  updateList,
  deleteList,
} = require("../controllers/list");

router.get("/", getLists);
router.post("/", createList);
router.get("/:id", getList);
router.put("/:id", updateList);
router.delete("/:id", deleteList);

module.exports = router;
