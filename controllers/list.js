const List = require("../models/list");

exports.createList = async function (req, res, next) {
  try {
    const { title } = req.body;
    const list = await List.create({
      title,
    });
    res.status(200).json({
      success: true,
      list,
    });
  } catch (err) {
    res.status(404).json({
      err,
    });
  }
};

exports.getLists = async function (req, res, next) {
  try {
    const lists = await List.find();
    res.status(200).json({
      success: true,
      lists,
    });
  } catch (err) {
    res.status(404).json({
      err,
    });
  }
};

exports.getList = async function (req, res, next) {
  try {
    const list = await List.findById(req.params.id);
    res.status(200).json({
      success: true,
      list,
    });
  } catch (err) {
    res.status(404).json({
      err,
    });
  }
};

exports.updateList = async function (req, res, next) {
  try {
    const list = await List.findById(req.params.id);
    list.title = req.body.title;
    await list.save();
    res.status(200).json({
      success: true,
      list,
    });
  } catch (err) {
    res.status(404).json({
      err,
    });
  }
};

exports.deleteList = async function (req, res, next) {
  try {
    const list = await List.findById(req.params.id);
    list.delete();
    res.status(200).json({
      success: true,
      list,
    });
  } catch (err) {
    res.status(404).json({
      err,
    });
  }
};
