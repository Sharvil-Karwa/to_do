const express = require("express");
const router = express.Router();

const {
  getLists,
  createList,
  updateList,
  deleteList,
} = require("../controllers/list");

router.get("/", getLists);
router.post("/", createList);
router.put("/:id", updateList);
router.delete("/:id", deleteList);

module.exports = router;
