const db = require("../db");

// constructor
class plannedtasks {
  constructor(plantasks) {
    this.plantasks = plantasks;
  }
}
// create planned task
exports.create = (req, result) => {
  db.query(
    `INSERT INTO "plannedtasks" (id, plantasks) 
    VALUES ('${req.id}', '${req.plantasks}')`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }

      console.log("planned Task has been created successfully: ", res);
    }
  );
};

// get all planned task
exports.getAll = (req, result) => {
  db.query(`SELECT * FROM "plannedtasks"`, (err) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};

// Delete a planned task
exports.delete = (id, result) => {
  db.query(`DELETE FROM "plannedtasks" WHERE id = ( '${id}' )`, (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(err, null);
      return;
    }

    if (res.affectedRows === 0) {
      // Task with the specified id not found
      result({ kind: "not_found" }, null);
      return;
    }

    console.log(`Deleted task with id: ${id}`);
    result(null, res);
  });
};

// Update a planned task
exports.updatePlannedTask = (result) => {
  db.query(
    `UPDATE "plannedtasks" (plantasks) 
    SET  ('${req.tasks}')`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
    }
  );
};

// Find a single planned task by Id
exports.getById = (req, result) => {
  db.query(`SELECT * FROM "plannedtasks" WHERE id = ${req}`, (err, res) => {
    if (err) {
      result({ kind: "not_found" }, null);
    } else {
      return result(null, res.rows);
    }
  });
};
