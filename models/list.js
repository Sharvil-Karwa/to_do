const mongoose = require("mongoose");
const ListSchema = new mongoose.Schema({
  title: {
    type: "String",
    required: true,
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "task",
    },
  ],
});

const List = mongoose.model("list", ListSchema);
module.exports = List;
