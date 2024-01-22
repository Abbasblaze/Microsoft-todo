const db = require("../db");

// constructor
class Task {
  constructor(task) {
    this.task = task;
  }
}
// create task
exports.create = (req, result) => {
  db.query(
    `INSERT INTO "task" (id , tasks , taskfor) 
      VALUES ('${req.id}' ,'${req.tasks}','${req.taskfor}')`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return;
      }

      console.log("Task created successfully: ", res);
    }
  );
};

// get all task
exports.getAll = (req, result) => {
  db.query(`SELECT * FROM "task"`, (err, res) => {
    if (err) {
      result({ kind: "not_found" }, null);
    } else {
      return result(null, res.rows);
    }
  });
};

// Delete a task
exports.delete = (id, result) => {
  db.query(`DELETE FROM "task" WHERE id = ( '${id}' )`, (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(err, null);
      return;
    }

    if (res.affectedRows === 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log(`Deleted task with id: ${id}`);
    result(null, res);
  });
};

// Update a task
exports.update = (result) => {
  db.query(
    `UPDATE "task" (tasks) 
    SET  ('${req.tasks}', '${req.taskfor}')`,
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
  db.query(`SELECT * FROM "task" WHERE id = ${req}`, (err, res) => {
    if (err) {
      result({ kind: "not_found" }, null);
    } else {
      return result(null, res.rows);
    }
  });
};
