const db = require("../db");

const Important = require("../models/important.models.js");

// create ImportantTask
exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "This can't be empty!",
      });
      return;
    }
    const data = await Important.create(req.body);
    res.status(200).json({
      success: true,
      message: "important task has been created successfully",
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error occurred while creating the important task.",
    });
  }
};

// get all ImportantTask
exports.getAll = (req, res) => {
  const id = req.query.id;
  Important.getAll(id, (err, data) => {
    if (err)
      res.status(500).send({
        message: "Some error occurred while retrieving ImportantTask.",
      });
    else res.send(data);
  });
};

// Delete a ImportantTask
exports.delete = (req, res) => {
  Important.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found ImportantTask with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete ImportantTask with id " + req.params.id,
        });
      }
    } else res.send({ message: `ImportantTask is deleted successfully!` });
  });
};

// Update a ImportantTask
exports.updateImportantTask = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    const data = await Important.create(req.body);
    res.status(200).json({
      success: true,
      message: "ImportantTask updated successfully",
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error occurred while updating the ImportantTask.",
    });
  }
};

// Find a single ImportantTask by Id
exports.getById = (req, res) => {
  Important.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(404).json({
          message: `No ImportantTask with id ${req.params.id}.`,
        });
      } else {
        return res.status(500).json({
          message: "Error retrieving ImportantTask with id " + req.params.id,
        });
      }
    }

    res.json(data);
  });
};
