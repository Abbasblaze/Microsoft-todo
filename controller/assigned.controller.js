const db = require("../db");

const assigned = require("../models/assigned.models.js");

// create assigned Tasks (W)
exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "This can't be empty!",
      });
      return;
    }
    const data = await assigned.create(req.body);
    res.status(200).json({
      success: true,
      message: "Task has been assigned successfully",
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error occurred while creating the task.",
    });
  }
};

// get all assigned Tasks
exports.getAll = (req, res) => {
  const id = req.query.id;
  Assigend.getAll(id, (err, data) => {
    if (err)
      res.status(500).send({
        message: "Some error occurred while retrieving assigned Task.",
      });
    else res.send(data);
  });
};

// Delete a assigned Tasks
exports.delete = (req, res) => {
  assigned.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found assigned Task with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete assigned task with id " + req.params.id,
        });
      }
    } else res.send({ message: `assigned Task is deleted successfully!` });
  });
};

// Update a assigned Tasks
exports.updateAssignedTask = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    const data = await assigned.create(req.body);
    res.status(200).json({
      success: true,
      message: "assigned Task updated successfully",
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error occurred while updating the assigned Task.",
    });
  }
};

// Find a single assigned Tasksby Id
exports.getById = (req, res) => {
  assigned.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(404).json({
          message: `No assigned Task with id ${req.params.id}.`,
        });
      } else {
        return res.status(500).json({
          message: "Error retrieving assigned Task with id " + req.params.id,
        });
      }
    }

    res.json(data);
  });
};
