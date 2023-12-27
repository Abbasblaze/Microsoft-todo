const db = require("../db");

// constructor
class Planned {
  constructor(planned) {
    this.planned = planned;
  }
}
// create planned task
exports.create = (req, result) => {
  db.query(
    `INSERT INTO "planned" (plannedTasks) 
      VALUES ('${req.plannedTasks}' )`,
    (err) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
    }
  );
};

// get all planned task
exports.getAll = (req, result) => {
  db.query(`SELECT * FROM "planned"`, (err) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
  });
};

// Delete a planned task
exports.delete = (id, result) => {
  db.query(`DELETE FROM "planned" WHERE id = ( '${id}' )`, (err, res) => {
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
    `UPDATE "planned" (plannedTasks) 
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
  db.query(`SELECT * FROM "planned" WHERE id = ${req}`, (err, res) => {
    if (err) {
      result({ kind: "not_found" }, null);
    } else {
      return result(null, res.rows);
    }
  });
};
