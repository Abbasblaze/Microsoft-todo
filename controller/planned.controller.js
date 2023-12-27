const db = require("../db");

const plannedtasks = require("../models/planned.models.js");

// create planned Task
exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "This can't be empty!",
      });
      return;
    }
    const data = await plannedtasks.create(req.body);
    res.status(200).json({
      success: true,
      message: "Planned task created successfully",
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error occurred while creating the planned task.",
    });
  }
};

// get all planned Task
exports.getAll = (req, res) => {
  const id = req.query.id;
  plannedtasks.getAll(id, (err, data) => {
    if (err)
      res.status(500).send({
        message: "Some error occurred while retrieving planned Task.",
      });
    else res.send(data);
  });
};

// Delete a planned Task
exports.delete = (req, res) => {
  plannedtasks.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found planned Task with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete planned Task with id " + req.params.id,
        });
      }
    } else res.send({ message: `planned Task is deleted successfully!` });
  });
};

// Update a planned Task
exports.updatePlannedTask = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    const data = await plannedtasks.create(req.body);
    res.status(200).json({
      success: true,
      message: "planned Task updated successfully",
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error occurred while updating the planned Task.",
    });
  }
};

// Find a single planned Task by Id
exports.getById = (req, res) => {
  plannedtasks.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(404).json({
          message: `No planned Task with id ${req.params.id}.`,
        });
      } else {
        return res.status(500).json({
          message: "Error retrieving planned Task with id " + req.params.id,
        });
      }
    }

    res.json(data);
  });
};
