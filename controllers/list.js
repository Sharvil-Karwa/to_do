const List = require("../models/list");

exports.getLists = (req, res) => {
  List.find()
    .then((data) => res.json(data))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to get lists", error: err.message })
    );
};

exports.createList = (req, res) => {
  const newList = new List(req.body);
  newList
    .save()
    .then((data) => res.json({ message: "List created successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to create list", error: err.message })
    );
};

exports.updateList = (req, res) => {
  List.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({ message: "List updated successfully" }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to update list", error: err.message })
    );
};

exports.deleteList = (req, res) => {
  List.findByIdAndDelete(req.params.id)
    .then((data) => res.json({ message: "List deleted successfully" }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to delete list", error: err.message })
    );
};
