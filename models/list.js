const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  title: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
  },
});

const List = mongoose.model("list", ListSchema);

module.exports = List;