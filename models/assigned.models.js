const db = require("../db");

// constructor
class assigned {
  constructor(assigned) {
    this.assigned = assigned;
  }
}
// create task
exports.create = (req, result) => {
  db.query(
    `INSERT INTO "assigned" (assignedtask , id) 
    VALUES ('${req.assignedtask}' ,'${req.id}')`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }

      console.log("Task has been assigned successfully: ", res);
    }
  );
};

// get all task
exports.getAll = (req, result) => {
  db.query(
    `SELECT * FROM "class assigned {
    "`,
    (err) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
    }
  );
};

// Delete a task
exports.delete = (id, result) => {
  db.query(`DELETE FROM "assigned" WHERE id = ( '${id}' )`, (err, res) => {
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
// Update a task
exports.updateAssignedTask = (result) => {
  db.query(
    `UPDATE "assigned" (assignedtask) 
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

// Find a single task by Id
exports.getById = (req, result) => {
  db.query(`SELECT * FROM "assigned" WHERE id = ${req}`, (err, res) => {
    if (err) {
      result({ kind: "not_found" }, null);
    } else {
      return result(null, res.rows);
    }
  });
};
